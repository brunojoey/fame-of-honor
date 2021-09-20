<template>
  <div>
    <h1 class="position-header">{{ this.$route.params.player_position }}</h1>
    <div class="position-page">
      <div :key="position.id" v-for="position in positions" class="player-card">
        <p v-if="position.full_name">
          <strong>Name: </strong>{{ position.full_name }}
        </p>
        <p v-if="position.team_name">
          <strong>Team: </strong>{{ position.team_name }}
        </p>
        <p v-if="position.notes">
          <strong>Additional Notes: </strong> {{ position.notes }}
        </p>
        <p v-if="position.years_active">
          <strong>Years Active: </strong>{{ position.years_active }}
        </p>
        <p v-if="position.year_inducted">
          <strong>Year Inducted: </strong>{{ position.year_inducted }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const headers = [{ "Content-Type": "application/json" }, { "Access-Control-Allow-Origin": "https://www.the-fame-of-honor.herokuapp.com" }];

export default {
  name: "Positions",
  data() {
    return {
      positions: [],
    };
  },
  methods: {
    getPosition(player_position) {
      axios.get(`https://fame-of-honor-server.herokuapp.com/api/positions/${player_position}`, { headers })
        .then((response) => {
          this.positions = response.data;
          console.log("Position", response.data);
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
  },
  mounted() {
    this.getPosition(this.$route.params.player_position);
  },
};
</script>

<style>
.position-page {
  display: grid;
  grid-template-columns: repeat(4, 6fr);
  column-gap: 6rem;
  row-gap: 2rem;
  padding: 1rem 5rem 1rem 5rem;
}

.player-card {
  background-color: #3f5061;
  color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: 0.25ch 0.25ch 0.5ch grey;
}

@media screen and (max-width: 37.5em) {
  .position-page {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  .player-card {
    transform: scale(1.25, 1.25);
    margin-bottom: 3.5rem;
    width: 100%;
  }
}
</style>