import axios from "axios";

const http = () => {
  axios.create({
    publicPath: "https://fame-of-honor-server.herokuapp.com/api/" || "http://localhost:3000/api/",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "https://fame-of-honor-server.herokuapp.com/api/",
      "Access-Control-Allow-Credentials": "true"
    }
  });
};

const getAllTeams = () => {
  return http.get("/api/teams", {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin":
        "https://fame-of-honor-server.herokuapp.com/api/teams",
      "Access-Control-Allow-Credentials": "true",
    },
  });
};

const getOneTeam = (id) => {
  return http.get(`/api/teams/${id}`, {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin":
        "https://fame-of-honor-server.herokuapp.com/api/teams/:id",
      "Access-Control-Allow-Credentials": "true",
    },
  });
};

const getTeamInductees = (id) => {
  return http.get(`/api/teams/${id}/inductees`, {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin":
        "https://fame-of-honor-server.herokuapp.com/api/teams/:id/inductees",
      "Access-Control-Allow-Credentials": "true",
    },
  });
};

const getPosition = (player_position) => {
  return http.get(`/api/positions/${player_position}`, {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin":
        "https://fame-of-honor-server.herokuapp.com/api/positions/:player_position",
      "Access-Control-Allow-Credentials": "true",
    },
  });
};

const ringAPI = { getAllTeams, getOneTeam, getTeamInductees, getPosition };

export default ringAPI;
