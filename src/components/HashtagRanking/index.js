import { HashtagContainer, Line } from "./styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

function HashtagRanking() {

  const [hashtagList, setHashtagList] = useState([]);
  const { auth } = useAuth()
  const navigate = useNavigate()

  async function getHashtagRanking() {
    try {
      const list = await api.getHashtagRankingList(auth.token)
      setHashtagList(list.data)

    }
    catch (error) {
      console.log(error)
      alert("An error has occur in retrieving hashtag ranking data")
    }
  }
  useEffect(() => {

    getHashtagRanking()

  }, [])

  return (
    <HashtagContainer>
      <h1>trending</h1>
      <Line />
      <ul>
        {hashtagList.map((el, i) =>
          <li key={i} onClick={() => navigate(`/hashtag/${el.name}`)} key={el.hashtagId}>
            # {el.name}
          </li>)}
      </ul>
    </HashtagContainer>
  )

}

export default HashtagRanking