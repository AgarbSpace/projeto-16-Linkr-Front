import { RepostsIconsContainer } from "../styled";
import { FiRepeat } from 'react-icons/fi'
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import api from "../../../services/api";

export default function RepostsIcons({postId}) {
  const [repostCount, setRepostCount] = useState(0)
  const { auth } = useAuth()
  useEffect(() => getRepostCount(),
    // eslint-disable-next-line
    [])

  async function getRepostCount() {
    try {
      const { data: count } = await api.getRepostCount(auth.token, postId)
      setRepostCount(count)
    } catch (error) {
      console.log(error.response)
    }
  }

  return(
    <RepostsIconsContainer>
      <FiRepeat/>
      <p><span>{repostCount}</span>{repostCount === 1 ? ` re-post`: ` re-posts`}</p>
    </RepostsIconsContainer>
  )
}
