import { NewPostNotificationStyled } from "./styled"
import { BsArrowRepeat } from "react-icons/bs"
import { AiOutlineSync } from "react-icons/ai"
import { useLocation } from "react-router"
import api from "../../services/api";
import useInterval from "../../hooks/useInterval";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

function NewPostNotification(Props) {

  console.log("fui chamado NewPostNotification")

  const [newPost, setNewPost] = useState([])
  const location = useLocation().pathname;
  const { auth } = useAuth()
  const [loading, setLoading] = useState(false)

  useInterval(fetchData, 15000)

  async function fetchData() {
    try {

      const newPostList = await api.getNewNotifications(auth.token, location, true)

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

  async function handleOnClick() {
    setLoading(true)
    try {
      const newPostList = await api.getNewNotifications(auth.token, location, false)

      Props.setPosts([...newPostList, ...Props.currentList])

      setNewPost([])

    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  return (
    <>
      {newPost.length === 0
        ? ""
        : <NewPostNotificationStyled onClick={handleOnClick}>
          {loading
            ? "Loading new posts"
            : `${newPost.length} new posts, load more!`
          }
          <AiOutlineSync size="1.5em" strokeWidth="2.2em" />
        </NewPostNotificationStyled>
      }
    </>
  )
}

export default NewPostNotification