<template>
  <header class="navbar-header">
    <nav>
      <strong class="nav-item">
        <router-link class="nav-item link" :to="'/'"
          >The Fame of Honors</router-link
        >
      </strong>
      <strong>
        <router-link class="nav-item link" :to="'/teams'">Teams</router-link>
      </strong>
      <strong>
        <router-link class="nav-item link" :to="'/positions'"
          >Positions</router-link
        >
      </strong>
    </nav>
  </header>
</template>

<style>
.navbar-header {
  padding: 1.5rem;
  height: 5rem;
  background-color: #2c3e50;
  display: flex;
  flex-direction: row;
}

.nav-item {
  padding: 1.5rem;
}

.link {
  text-decoration: none;
  color: white;
}

@media screen and (max-width: 37.5em) {
  .navbar-header {
    height: 7.5rem;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .nav-item {
    padding: 0;
    font-weight: bold;
  }

}
</style>