import { HeaderTimeline, ButtonFollow, ButtonUnfollow } from "./Styleds";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useLocation, useParams } from "react-router";

export function UserHeader() {
  const [follow, setFollow] = useState(false)
  const { auth } = useAuth()
  const [userInfo, setUserInfo] = useState({})
  const { id, hashtag } = useParams()


  useEffect(() => {
    getAllFollows()
    getUserInfo()
  }, [id, hashtag]);

  async function getUserInfo() {
    if (id) {
      try {
        const user = await api.getUserInfoById(auth.token, id)
        setUserInfo(user)
      } catch (error) {
        console.log(error)
      }
    }
  }


  async function getAllFollows() {
    if (id) {
      const allFollows = await api.getAllFollows(auth.token, auth.userId)

      const followingId = allFollows.data.find(el => el.followerId === parseInt(id))

      if (followingId) {
        setFollow(true)
      }
      else {
        setFollow(false)
      }
    }
  }

  async function handleFollow() {
    try {
      await api.postFollow(auth.token, auth.userId, userInfo.id)
      setFollow(true)
    } catch (error) {
      console.log(error.response)
    }
  }

  async function handleUnfollow() {
    try {
      await api.postUnfollow(auth.token, auth.userId, userInfo.id)
      setFollow(false)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <HeaderTimeline>
      <div>
        {hashtag
          ? ""
          : <img src={userInfo.picture} alt="imageUser" />
        }
        <h2>{
          hashtag
            ? `${hashtag}`
            : id
              ? `${userInfo.name}'s posts'`
              : "timeline"
        }</h2>
      </div>
      {id
        ? <>{userInfo.id === auth.userId ?
          "" :
          <>
            {follow === false ?
              <ButtonFollow onClick={handleFollow}>Follow</ButtonFollow>
              :
              <ButtonUnfollow onClick={handleUnfollow}>Unfollow</ButtonUnfollow>
            }
          </>
        }</>
        : ""
      }
    </HeaderTimeline>
  );
}