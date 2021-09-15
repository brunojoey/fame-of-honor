import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    "Content-type": "application/json"
  },
  origin: "https://fame-of-honor-server.herokuapp.com/api/"
});