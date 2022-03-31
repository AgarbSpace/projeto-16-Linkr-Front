import { RepostsIconsContainer } from "../styled";
import { FiRepeat } from 'react-icons/fi'
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import api from "../../../services/api";
import confirmRePost from "../../../modals/confirmRePost";
import confirmDeleteRePost from "../../../modals/confirmDeleteRePost";

export default function RepostsIcons({postId, isRepost}) {
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

  async function handleRepost() {
    if(isRepost) {
      await confirmDeleteRePost(postId, auth.token)
      getRepostCount()
      return 
    }
    await confirmRePost(postId, auth.token)
    getRepostCount()
  }
  
  return(
    <RepostsIconsContainer onClick={handleRepost}>
      <FiRepeat/>
      <p><span>{repostCount}</span>{repostCount === 1 ? ` re-post`: ` re-posts`}</p>
    </RepostsIconsContainer>
  )
}
