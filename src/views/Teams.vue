<template>
<div>
  <h1 class="team-header">Teams</h1>
  <div class="team-page">
    <div :key="team.id" v-for="team in teams" class="team-card">
      <h3 class="team-name">
        <router-link :to="'/teams/' + team.id" class="team-link">{{
          team.team_name
        }}</router-link>
      </h3>
      <img class="team-logo" :src="team.logo" :alt="team.logo" />
    </div>
  </div>
</div>
</template>

<script>
import ringAPI from "../ringAPI";

export default {
  name: "teams",
  data() {
    return {
      teams: [],
      currentTeam: {},
    };
  },
  methods: {
    getTeams() {
      ringAPI.getAllTeams()
        .then((response) => {
          this.teams = response.data;
          console.log("Teams", response.data);
        })
        .catch((e) => {
          console.log("error", e);
        });
    },
  },
  mounted() {
    this.getTeams();
  },
};
</script>

<style>
.team-header {
  text-align: center;
  padding: 1rem;
  color: #2c3e50;
  font-weight: bold;
}

.team-page {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  column-gap: 6rem;
  row-gap: 2rem;
  margin-bottom: 1rem;
}
.team-card {
  text-align: center;
}

.team-name {
  font-weight: bold;
}

.team-logo {
  width: 75%;
}

.team-link {
  text-decoration: none;
  font-size: 2rem;
  transition: 0.2s all;
}

.team-link:hover {
  text-shadow: 0.2ch 0.2ch 0.5ch rgba(20, 20, 20, 0.9);
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #111e2c;
}

.team-link:active {
  -webkit-text-fill-color: #111e2c; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 0.25px;
  -webkit-text-stroke-color: white;
}

@media screen and (max-width: 37.5em) {
  .team-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
