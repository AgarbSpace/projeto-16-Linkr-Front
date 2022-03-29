import { NewPostNotificationStyled, ReloadIcon } from "./styled"
import { BsArrowRepeat } from "react-icons/bs"
import { useLocation } from "react-router"
import api from "../../services/api";
import useInterval from "../../hooks/useInterval";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useReload from "../../hooks/useReload";

function NewPostNotification(Props) {


  const [newPost, setNewPost] = useState([])
  const location = useLocation().pathname;
  const { auth } = useAuth()

  useInterval(fetchData, 15000)

  async function fetchData() {
    try {

      const newPostList = await api.getNewNotifications(auth.token, location)

      const clientLastPostId = newPostList[0].id

      const serverLastPostId = Props.currentList[0].id

      if (clientLastPostId !== serverLastPostId) {
        const slicePost = newPostList.slice(0, newPostList.indexOf(newPostList.find(el => el.id === serverLastPostId)))
        setNewPost(slicePost)
      }

    } catch (error) {
      console.log(error)
    }

  }

  function handleOnClick() {

    Props.setPosts([...newPost, ...Props.currentList])

    setNewPost([])
  }

  return (
    <>
      {newPost.length === 0
        ? ""
        : <NewPostNotificationStyled onClick={handleOnClick}>
          {newPost.length} new posts, load more!
          <BsArrowRepeat size="1.5em" strokeWidth="0.75" />
        </NewPostNotificationStyled>
      }
    </>
  )
}

export default NewPostNotification