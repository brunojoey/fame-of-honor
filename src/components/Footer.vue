<template>
  <footer class="navbar-footer">
    <nav>
      <strong>
        <a class="nav-item link" :href="'https://www.nfl.com'">NFL</a>
      </strong>
      <strong>
        <a class="nav-item link" :href="'https://www.github.com/brunojoey'"
          >Made by Joey Bruno</a
        >
      </strong>
      <strong>
        <router-link class="nav-item link" :to="'/disclaimer'"
          >Disclaimer</router-link
        >
      </strong>
    </nav>
  </footer>
</template>

<style>
.navbar-footer {
  position: inherit;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  background-color: #2c3e50;
  padding: 1.5rem;
  height: 5rem;
}

.nav-item {
  color: white;
  transition: 0.2s all;
}

.nav-item:hover {
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgb(32, 87, 236);
  font-size: 1.45rem;
}

.nav-item:active {
  -webkit-text-fill-color: rgb(
    32,
    87,
    236
  ); /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
}

@media screen and (max-width: 37.5em) {
  nav {
    display: flex;
    flex-direction: column;
  }

  .navbar-footer {
    height: 7.5rem;
    text-align: center;
    position: relative;
  }

  .nav-item {
    color: white;
    text-decoration: underline;
    font-size: 100%;
  }

  .nav-item:hover {
    color: white;
    font-size: 100%;
  }

  .nav-item:active {
    color: white;
    font-size: 100%;
  }
}
</style>