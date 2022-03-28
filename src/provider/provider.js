import axios from "axios";
import { errServer } from "../modals/errServer";

const BASE_URL = "http://localhost:5000/"

async function getTimeline(){
    try {
        const promise = await axios.get(`${BASE_URL}timeline`,
        
        );
        return promise.data
    } catch (error) {
        console.log(error.response)
        errServer();
        return;
    }
}

async function getUserTimeline (id) {
  try {
    const promise = await axios.get(`${BASE_URL}user/${id}`,);
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