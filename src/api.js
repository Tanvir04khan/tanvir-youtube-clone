import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyA-sIAw1jmk-xuQKklHj3dyioYyQrf_Uy8",
  },
});

export default request;
