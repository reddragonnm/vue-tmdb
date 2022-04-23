<script setup>
  import { RouterLink } from "vue-router";

  const props = defineProps(["movieTitle"]);
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <RouterLink to="/"><span>Home</span></RouterLink>
      <span>|</span>
      <span>{{ props.movieTitle }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background: var(--med-grey);
    color: var(--white);
  }

  .content {
    display: flex;
    width: 100%;
    max-width: var(--max-width);
    padding: 0 20px;

    span {
      font-size: 1.2rem;
      color: var(--white);
      padding-right: 10px;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
</style>
