<script setup>
  import Header from "@/components/Header.vue";
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <Header />
  <RouterView />
</template>

<style lang="scss">
  :root {
    --max-width: 1280px;
    --white: #fff;
    --light-grey: #eee;
    --med-grey: #353535;
    --dark-grey: #1c1c1c;
    --font-large: 2.5rem;
    --font-big: 1.5rem;
    --font-med: 1.2rem;
    --font-small: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: "Abel", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
  }
</style>
