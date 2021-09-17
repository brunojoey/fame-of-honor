import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue"
import Teams from "../views/Teams.vue"
import Team from "../views/Team.vue"
import Positions from "../views/Positions.vue"
import Position from "../views/Position.vue"
import Disclaimer from "../views/Disclaimer.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams
  },
  {
    path: "/teams/:id",
    name: "Team",
    component: Team
  },
  {
    path: "/positions",
    name: "Positions",
    component: Positions
  },
  {
    path: "/positions/:player_position",
    name: "Position",
    component: Position
  },
  {
    path: "/disclaimer",
    name: "Disclaimer",
    component: Disclaimer
  }
];

const router = createRouter({
  history: createWebHistory(process.env.baseURL), 
  routes
});

export default router