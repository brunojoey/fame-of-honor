import axios from "axios";

export default axios.create({
  baseURL: "https://fame-of-honor-server.herokuapp.com/api/positions/RB" || "http://localhost:3000/api/",
  headers: {
    "Content-type": "application/json"
  }
});