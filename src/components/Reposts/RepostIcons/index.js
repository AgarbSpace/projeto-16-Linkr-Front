import { RepostsIconsContainer } from "../styled";
import { FiRepeat } from 'react-icons/fi'
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import api from "../../../services/api";
import confirmRePost from "../../../modals/confirmRePost";

export default function RepostsIcons({ postId }) {
  const [repostCount, setRepostCount] = useState(0)
  const [reload, setReload] = useState(false)

  const { auth } = useAuth()
  useEffect(() => getRepostCount(),
    // eslint-disable-next-line
    [reload])

  async function getRepostCount() {
    try {
      const { data: count } = await api.getRepostCount(auth.token, postId)
      setRepostCount(count)
    } catch (error) {
      console.log(error.response)
    }
  }

  function handleRepost() {
    confirmRePost(postId, auth.token, handleReload)
  }

  function handleReload() {
    setReload(!reload)
  }

  return (
    <RepostsIconsContainer onClick={handleRepost}>
      <FiRepeat />
      <p><span>{repostCount}</span>{repostCount === 1 ? ` re-post` : ` re-posts`}</p>
    </RepostsIconsContainer>
  )
}
