import axios from "axios";
import dotenv from "dotenv";
import { errServer } from "../modals/errServer";
dotenv.config()

const BASE_URL = process.env.REACT_APP_URL || "http://localhost:5000"

// localhost = http://localhost:5000
// onlineServer = https://back--linkr.herokuapp.com

function createConfig(token) {
  return { headers: { 'Authorization': `Bearer ${token}` } }
}

async function getImageProfile(token) {
  const config = createConfig(token)
  const image = await axios.get(`${BASE_URL}/header`, config)
  return image
}

async function searchUser(token, query) {

  const config = createConfig(token)
  const usersList = await axios.get(`${BASE_URL}/searchusers?name=${query}`, config)
  return usersList.data
}

async function postPublication(token, body) {

  const config = createConfig(token)

  await axios.post(`${BASE_URL}/publication`, { ...body }, config)

}

async function getHashtagRankingList(token) {
  const config = createConfig(token)
  const list = await axios.get(`${BASE_URL}/hashtagranking`, config)
  return list
}
async function getLikes(token, postId) {
  const config = createConfig(token)
  const list = await axios.get(`${BASE_URL}/likes/${postId}`, config)
  return list
}

async function postFollowOrUnfollow(token, userId, followerId) {
  const config = createConfig(token)
  const list = await axios.post(`${BASE_URL}/followorunfollow/${userId}`, { followerId, config })
  return list
}

async function postFollow(token, userId, followerId) {
  const config = createConfig(token)
  const list = await axios.post(`${BASE_URL}/follow/${userId}`, { followerId, config })
  return list
}

async function getAllFollows(token, userId) {
  const config = createConfig(token)
  const list = await axios.get(`${BASE_URL}/allfollows/${userId}`, config)
  return list
}

async function postUnfollow(token, userId, followerId) {
  const config = createConfig(token)
  const list = await axios.post(`${BASE_URL}/unfollow/${userId}`, { followerId, config })
  return list
}

async function deletePublication(token, postId) {
  const config = createConfig(token);
  return axios.delete(`${BASE_URL}/publication/${postId}`, config);
}

async function editPublication(token, body, id) {

  const config = createConfig(token)
  return axios.post(`${BASE_URL}/publication/edit/${id}`, { ...body }, config)
}

async function likeOrRemoveLike(token, userId, postId) {
  const config = createConfig(token);
  return axios.patch(`${BASE_URL}/likes/${postId}`, { userId }, config)
}

async function getPublicationByHashtag(token, hashtag) {
  const config = createConfig(token)
  config.headers.nameHashtag = `${hashtag}`
  const list = await axios.get(`${BASE_URL}/hashtag`, config);
  return list
}

async function signIn(data) {
  const token = await axios.post(`${BASE_URL}/signin`, { ...data })
  return token
}

async function signUp(data) {
  await axios.post(`${BASE_URL}/signup`, { ...data })
}

async function getUserTimeline(id, token) {

  const config = createConfig(token)

  try {
    const promise = await axios.get(`${BASE_URL}/user/${id}`, config);
    return promise.data;
  } catch (err) {
    console.log(err);
    errServer();
    return;
  }
}

async function getTimeline(token, offset) {

  const config = createConfig(token);

  let offsetQueryString = "";

  if (offset) {
    offsetQueryString = `?offset=${offset}`
  }

  try {
    const promise = await axios.get(`${BASE_URL}/timeline${offsetQueryString}`,
      config
    );
    return promise.data
  } catch (error) {
    console.log(error.response)
    errServer();
    return;
  }
}

async function getNewNotifications(token, location, isOnlyInfo) {

  const config = createConfig(token)

  if (isOnlyInfo) {
    config.headers.skipMetaData = true
  }
  try {
    const promise = await axios.get(`${BASE_URL}/notification${location}`,
      config
    );
    return promise.data
  } catch (error) {
    console.log("erro trying to get new notifications ", error.response)
    return;
  }
}

async function getCommentsByPostId(token, postId) {

  const config = createConfig(token)

  try {
    const promise = await axios.get(`${BASE_URL}/comments/${postId}`,
      config
    );
    return promise.data
  } catch (error) {
    return;
  }
}

async function getRepostCount(token, postId) {
  const config = createConfig(token);
  return await axios.get(`${BASE_URL}/re-post/${postId}`, config)
}
async function repost(token, postId) {
  const config = createConfig(token)
  return await axios.post(`${BASE_URL}/re-post/${postId}`, {}, config)
}
async function deleteRepost(token, postId) {
  const config = createConfig(token)

  return await axios.delete(`${BASE_URL}/re-post/${postId}`, config)
}
async function listFollows(token) {
  const config = createConfig(token);
  try {
    const promise = await axios.get(`${BASE_URL}/hasFollows`, config);
    return promise.data;
  } catch (err) {
    console.log(err)
    return;
  }
}

async function postComment(token, body, id) {
  const config = createConfig(token);
  try {
    const promise = await axios.post(`${BASE_URL}/comments/${id}`, body, config);
    return promise.data;
  } catch (err) {
    console.log(err)
    return;
  }
}

async function getUserInfoById(token, id) {
  const config = createConfig(token);

  try {
    const promise = await axios.get(`${BASE_URL}/users/${id}`, config);
    return promise.data;
  } catch (err) {
    console.log(err)
    return;
  }

}

const api = {
  getImageProfile,
  searchUser,
  postPublication,
  getHashtagRankingList,
  getLikes,
  deletePublication,
  editPublication,
  likeOrRemoveLike,
  getPublicationByHashtag,
  signIn,
  signUp,
  getUserTimeline,
  getTimeline,
  getNewNotifications,
  getCommentsByPostId,
  postFollowOrUnfollow,
  postFollow,
  postUnfollow,
  getAllFollows,
  getRepostCount,
  repost,
  deleteRepost,
  listFollows,
  postComment,
  getUserInfoById,
}

export default api