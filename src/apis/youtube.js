import axios from "axios";

const KEY = "AIzaSyBB6ZUl0vmXQfvJGunMp75NMf3m8Z8dvRA";

// creating a preconfigured instance of axios with url and authorization

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
