import axios from "axios";

const BASE_URL = "http://localhost:5000"

function createConfig(token) {
  return { headers: { 'Authorization': `Bearer ${token}`}}
}

async function getImageProfile(token) {
  const config = createConfig(token)
  const image = await axios.get(`${BASE_URL}/header`,config)
  return image
}

const api = {getImageProfile}

export default api