import { HashtagContainer, Line } from "./styled";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HashtagRanking() {

  const [hashtagList, setHashtagList] = useState([]);

  const navigate = useNavigate()

  async function getHashtagRanking() {
    try {
      const list = await axios.get("http://localhost:5000/hashtagranking")
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
        {hashtagList.map((el) =>
          <li onClick={() => navigate(`/hashtag/${el.name}`)} key={el.hashtagId}>
            # {el.name}
          </li>)}
      </ul>
    </HashtagContainer>
  )

}

export default HashtagRanking