<template>
<div>
  <div class="inductee">
    <h1 :key="team.id">{{ team.team_name }}</h1>
    <img v-bind:src="team.logo" :alt="team.logo" class="team-page-logo" />
    <p class="history-ring">
      <strong>Ring of Honor History: </strong> {{ team.history }}
    </p>
    <h2 class="inductee-team">{{ team.team_name }} Inductees</h2>
  </div>
  <div class="inductee-page">
    <div
      :key="inductee.id"
      v-for="inductee in inductees"
      class="inductee-card"
      v-bind:style="{
        backgroundColor: team.color,
        borderColor: team.border_color,
      }"
    >
      <p v-if="inductee.full_name">
        <strong>Name: </strong>{{ inductee.full_name }}
      </p>
      <p v-if="inductee.player_position">
        <strong>Position: </strong>{{ inductee.player_position }}
      </p>
      <p v-if="inductee.notes">
        <strong>Additional Notes: </strong> {{ inductee.notes }}
      </p>
      <p v-if="inductee.years_active">
        <strong>Years Active: </strong>{{ inductee.years_active }}
      </p>
      <p v-if="inductee.year_inducted">
        <strong>Year Inducted: </strong>{{ inductee.year_inducted }}
      </p>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
const headers = [{ "Content-Type": "application/json" }, { "Mode": "No-Cors" }, { "Credentials": "Include" }];

export default {
  name: "team",
  data() {
    return {
      team: {},
      inductees: [],
    };
  },
  methods: {
    async getTeam(id) {
      await axios.get(`https://fame-of-honor-server.herokuapp.com/api/teams/${id}`, { headers })
        .then((response) => {
          this.team = response.data;
          console.log("Team", response.data);
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
    async getTeamInductees(id) {
      await axios.get(`https://fame-of-honor-server.herokuapp.com/api/teams/${id}/inductees`, { headers })
        .then((response) => {
          this.inductees = response.data;
          console.log("Inductees", response.data);
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
  },
  mounted() {
    this.getTeam(this.$route.params.id);
    this.getTeamInductees(this.$route.params.id);
  },
};
</script>

<style>
.inductee {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}

.team-page-logo {
  width: 300px;
  height: 300px;
  margin-bottom: 0.5rem;
}

.history-ring {
  font-size: 1.15rem;
}

.inductee-page {
  display: grid;
  grid-template-columns: repeat(4, 6fr);
  column-gap: 8rem;
  row-gap: 2rem;
  padding: 1rem 1rem 1rem 1rem;
}

.inductee-card {
  color: white;
  text-align: left;
  border-width: 0.35rem;
  border-radius: 0.5rem;
  border-style: solid;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: 0.25ch 0.25ch 0.5ch grey;
  white-space: normal;
}

@media screen and (max-width: 37.5em) {
  .inductee-page {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .team-page-logo {
    width: 200px;
    height: 200px;
    margin-bottom: 0.5rem;
  }
}
</style>