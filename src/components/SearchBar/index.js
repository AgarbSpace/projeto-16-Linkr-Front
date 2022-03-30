import { DebounceInput } from 'react-debounce-input';
import { useState, useEffect } from 'react';
import { SearchBarContainer, UserListContainer, UserListItem, InputIconContainer } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import api from '../../services/api';
import useAuth from '../../hooks/useAuth';

function SearchBar() {

  const location = useLocation();
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [list, setList] = useState([])

  const { auth } = useAuth()

  useEffect(() => {
    async function getUserListSearch(token, searchedName) {
      if (searchedName) {
        try {
          const usersList = await api.searchUser(token, searchedName)
          setList(usersList)
        } catch (error) {
          console.log(error)
        }
      }
      else {
        setList([])
      }
      allFollowsFunction()
    }
    getUserListSearch(auth.token, name)
    // eslint-disable-next-line
  }, [name]);


  function handleClick(id) {
    navigate(`/user/${id}`)
    setList([])
    setName("")
  }

  const [allFollows, setAllFollows] = useState ([])

  async function allFollowsFunction(){
    const result = await api.getAllFollows(auth.token, auth.userId)
    setAllFollows(result.data)
  }

  if (location.pathname === "/" || location.pathname === "/signin" || location.pathname === "/signup") {
    return ""
  }

  let newList = []
  let newListUnfollow = []

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    for (let j = 0; j < allFollows.length; j++) {
      const follows = allFollows[j];
      if (item.id === follows.followerId && item) {
        newList.push(item)
      }else{
        newListUnfollow.push(item)
      }
    }
  }
  
  for (let i = 0; i < newListUnfollow.length; i++) {
    const item = list[i];
    newList.push(item)
  }

  const filteredArray = newList.filter(function(ele , pos){
    return newList.indexOf(ele) == pos;
  }) 

  for (let i = 0; i < filteredArray.length; i++) {
    const element = filteredArray[i];
    if (!element) {
      filteredArray.splice(i,1)
    }
  }

  return (
    <SearchBarContainer>
      <InputIconContainer>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          onChange={event => setName(event.target.value)}
          value={name}
          className="search-bar"
          placeholder="Search for people"
        />
        <AiOutlineSearch className="search-icon" />
      </InputIconContainer>
      <UserListContainer>
        {filteredArray.map((el, id) =>
          <UserListItem onClick={() => { handleClick(el.id) }} key={id}>
            <img src={el.picture} alt="user avatar" />
            <h1>{el.name}</h1>
            {allFollows.map((item)=>
              item.followerId === el.id ?
                <>
                <div></div>
                <h2>following</h2>
                </>
              :
                ""
            )}
          </UserListItem>
        )}
      </UserListContainer>
    </SearchBarContainer>
  )
}

export default SearchBar