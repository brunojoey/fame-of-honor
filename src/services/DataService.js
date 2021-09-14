import http from "../http-config";

class DataService {
  getAllTeams() {
    return http.get("/teams");
  }
  
  getOneTeam(id) {
    return http.get(`/teams/${id}`);
  }

  getTeamInductees(id) {
    return http.get(`/teams/${id}/inductees`);
  }

  getPosition(player_position) {
    return http.get(`/positions/${player_position}`);
  }
}

export default new DataService();