import axios from "axios"

const BASE_URL = "http://localhost:5000/"

async function getTimeline(){
    try {
        const promise = await axios.get(`${BASE_URL}timeline`,
        
        );
        return promise.data
    } catch (error) {
        console.log(error.response)
        alert("An error occured while trying to fetch the posts, please refresh the page");
        return;
    }
}

export const provider = {
    getTimeline
}