import axios from "axios";

export default axios.create({
  baseURL: process.env.DATABASE_URL || "http://localhost:3000/api/",
  headers: {
    "Content-type": "application/json"
  }
});