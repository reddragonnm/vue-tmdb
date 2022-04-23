<script setup>
  const props = defineProps(["image", "title", "text", "color"]);
</script>

<template>
  <div class="wrapper" :style="`background-image: url(${props.image});`">
    <div class="content">
      <div class="text">
        <h1>{{ props.title }}</h1>
        <p>{{ props.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 41%,
        rgba(0, 0, 0, 0.65) 100%
      ),
      var(--dark-grey) no-repeat;

    background-size: cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: animateHeroimage 1s;

    @keyframes animateHeroimage {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .content {
    padding: 20px;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .text {
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);

    h1 {
      font-size: var(--font-large);
      @media screen and (max-width: 720px) {
        font-size: var(--font-big);
      }
    }

    p {
      font-size: var(--font-med);

      @media screen and (max-width: 720px) {
        font-size: var(--font-small);
      }
    }

    @media screen and (max-width: 720px) {
      max-width: 100%;
    }
  }
</style>
