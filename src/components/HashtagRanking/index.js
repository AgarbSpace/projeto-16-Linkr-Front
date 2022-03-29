
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useReload from "../../hooks/useReload";
import api from "../../services/api";
import { HashtagContainer, Line } from "./styled";


function HashtagRanking(Props) {

  const [hashtagList, setHashtagList] = useState([]);
  const { auth } = useAuth()
  const { reload, setReload } = useReload()
  const navigate = useNavigate()


  useEffect(() => {
    async function getHashtagRanking(token) {
      try {
        const list = await api.getHashtagRankingList(token)
        setHashtagList(list.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    getHashtagRanking(auth.token)
    // eslint-disable-next-line

  }, [reload])

  return (
    <HashtagContainer>
      <h1>trending</h1>
      <Line />
      {Props.isLoading
        ? <h1>Loading</h1>
        : <ul>
          {hashtagList.map((el, i) =>
            <li onClick={() => navigate(`/hashtag/${el.name}`)} key={el.hashtagId}>
              # {el.name}
            </li>)}

        </ul>
      }
    </HashtagContainer>
  )

}

export default HashtagRanking