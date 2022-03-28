import axios from "axios";
import { errServer } from "../modals/errServer";

const BASE_URL = "http://localhost:5000/"


function createConfig(token) {
  return { headers: { 'Authorization': `Bearer ${token}` } }
}

async function getTimeline(token) {

  const config = createConfig(token)

  try {
    const promise = await axios.get(`${BASE_URL}timeline`,
      config
    );
    return promise.data
  } catch (error) {
    console.log(error.response)
    errServer();
    return;
  }
}

async function getUserTimeline(id, token) {

  const config = createConfig(token)

  try {
    const promise = await axios.get(`${BASE_URL}user/${id}`, config);
    return promise.data;
  } catch (err) {
    console.log(err);
    errServer();
    return;
  }
}

export const provider = {
  getTimeline,
  getUserTimeline,
}