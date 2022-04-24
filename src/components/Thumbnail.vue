<script setup>
  import { RouterLink } from "vue-router";
  import noImage from "@/assets/no_image.jpg";

  const props = defineProps({
    image: {
      type: String,
      default: noImage,
    },

    movieId: {
      type: Number,
      required: true,
    },

    clickable: {
      type: Boolean,
      default: true,
    },
  });
</script>

<template>
  <RouterLink v-if="props.clickable" :to="`/${props.movieId}`">
    <img :src="props.image ? props.image : noImage" alt="movie thumbnail" />
  </RouterLink>
  <img
    v-else
    :src="props.image ? props.image : noImage"
    alt="movie thumbnail"
  />
</template>

<style scoped lang="scss">
  img {
    width: 100%;
    height: 100%;
    max-width: 400px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateMovieThumb 0.5s;

    @keyframes animateMovieThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    &:hover {
      opacity: 0.8;
    }
  }
</style>
