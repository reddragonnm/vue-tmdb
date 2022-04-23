<script setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <RouterLink to="/">
        <img
          src="../assets/react-movie-logo.svg"
          alt="App Logo"
          class="logo-img"
        />
      </RouterLink>

      <img
        src="../assets/tmdb_logo.svg"
        alt="TMDB Logo"
        class="tmdb-logo-img"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    background: var(--dark-grey);
    padding: 0 20px;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max-width);
    padding: 20px 0;
    margin: 0 auto;
  }

  .logo-img {
    width: 200px;

    @media screen and (max-width: 500px) {
      width: 150px;
    }
  }

  .tmdb-logo-img {
    width: 100px;

    @media screen and (max-width: 500px) {
      width: 80px;
    }
  }
</style>
