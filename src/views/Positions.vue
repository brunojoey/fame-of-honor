  <template class="positions-page-main">
  <div>
    <h1 class="position-header">Positions</h1>
    <div class="positions-page">
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/QB'"
          >Quarterbacks</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/RB'"
          >Running Backs</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/FB'"
          >Full Backs</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/WR'"
          >Wide Receivers</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/TE'"
          >Tight Ends</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/OT'"
          >Offensive Tackles</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/OG'"
          >Offensive Guards</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/Center'"
          >Centers</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/DE'"
          >Defensive Ends</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/DT'"
          >Defensive Tackles</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/LB'"
          >Linebackers</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/CB'"
          >Cornerbacks</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/Safety'"
          >Safties</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/Kicker'"
          >Kickers</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/Punter'"
          >Punters</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/Coach'"
          >Coaches</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/Coordinator'"
          >Coordinators</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/Head%20Coach'"
          >Head Coaches</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/General%20Manager'"
          >General Managers</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/Executive'"
          >Executives</router-link
        >
      </li>
      <li class="position-item">
        <router-link class="position-link" :to="'/positions/Owner'"
          >Owners</router-link
        >
      </li>
    </div>
  </div>
</template>

<style>
.position-header {
  text-align: center;
  padding: 1rem;
  color: #2c3e50;
  font-weight: bold;
}

.positions-page {
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  column-gap: 3rem;
  row-gap: 1rem;
  padding: 1rem;
  margin-left: 5rem;
  height: 50rem;
  font-size: 1.15rem;
}

.position-item {
  list-style: none;
  display: flex;
  justify-content: left;
  font-size: 150%;
  font-weight: bold;
}

.position-link {
  transition: 0.2s all;
  text-decoration: none;
}

.position-link:hover {
  text-shadow: 0.2ch 0.2ch 0.5ch rgba(20, 20, 20, 0.5);
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #2c3e50;
}

.position-link:active {
  -webkit-text-fill-color: #111e2c; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 0.25px;
  -webkit-text-stroke-color: white;
}

@media screen and (max-width: 37.5em) {
  .position-header {
    text-align: center;
    padding: 1rem;
    font-size: 2.5rem;
  }

  .positions-page {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: inherit;
  }
}
</style>