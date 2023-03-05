<template>
  <div class="home-div">
    <h1 class="home-header">The Fame of Honors</h1>
    <div class="home-paragraph">
      <p>
        The Fame of Honors strives to showcase each NFL Teams' Hall of Fames and
        Ring of Honors to exemplify the history of the NFL along with the
        franchise's history.
      </p>
      <p>
        Hopefully, this website helps give recognition to each players' legacies
        who worked tirelessly each and every week in hopes of their team's
        success.
      </p>
    </div>
  </div>
</template>
  
<style>
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:wght@700");

.home-div {
  background-image: linear-gradient(to right bottom, #2c3e50, 70%, white);
  height: 35rem;
}

.home-header {
  font-family: "EB Garamond", "Garamond", "Times New Roman", Times, serif;
  text-align: right;
  color: white;
  font-size: 4rem;
  padding: 2rem 2rem 0 0;
  font-weight: bold;
}

.home-paragraph {
  padding-left: 2rem;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
}

@media screen and (max-width: 37.5em) {
  .home-div {
    display: flex;
    flex-direction: column;
    height: 85vh;
  }  

  .home-header {
    font-size: 3rem;
    text-align: center;
    margin: 0 0 1rem 1rem;
  }

  .home-paragraph {
    width: 90%;
    padding: 1rem;
    margin-left: 1rem;
    color: #000e1c;
  }
}
</style>