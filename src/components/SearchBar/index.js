import { DebounceInput } from 'react-debounce-input';
import { useState, useEffect } from 'react';
import { SearchBarContainer, UserListContainer, UserListItem, InputIconContainer } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import api from '../../services/api';
import useAuth from '../../hooks/useAuth';



function SearchBar(Props) {

  const location = useLocation();
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [list, setList] = useState([])

  const { auth } = useAuth()

  async function getUserListSearch() {
    if (name) {
      try {
        const usersList = await api.searchUser(auth.token, name)
        setList(usersList)
      } catch (error) {
        console.log(error)
      }
    }
    else {
      setList([])
    }
  }

  useEffect(() => {
    getUserListSearch()
  }, [name]);

  if (location.pathname === "/" || "/signup") {
    return ""
  }

  function handleClick(id) {
    navigate(`/user/${id}`)
    setList([])
    setName("")
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
        {list.map((el, id) =>
          <UserListItem onClick={() => { handleClick(el.id) }} key={id}>
            <img src={el.picture} alt="user picture" />
            <h1>{el.name}</h1>
          </UserListItem>
        )}
      </UserListContainer>
    </SearchBarContainer>
  )
}

export default SearchBar