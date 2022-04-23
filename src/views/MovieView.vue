<script setup>
  // vue
  import { ref, onMounted, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";

  // api
  import API from "@/api/API";
  import { IMAGE_BASE_URL, POSTER_SIZE } from "@/api/config";

  // components
  import Grid from "@/components/Grid.vue";
  import MovieInfo from "../components/MovieInfo.vue";
  import Spinner from "@/components/Spinner.vue";
  import BreadCrumb from "@/components/BreadCrumb.vue";

  // component states
  const route = useRoute();
  const state = ref({});
  const loading = ref(false);

  // component methods
  const fetchMovie = async (movieId) => {
    try {
      loading.value = true;

      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);

      const directors = credits.crew.filter(
        (member) => member.job === "Director"
      );
      state.value = {
        ...movie,
        actors: credits.cast,
        directors,
      };

      console.log(state.value);

      loading.value = false;
    } catch (err) {
      console.error(err);
    }
  };

  // lifecycle methods
  watch(() => route.params.movieId, fetchMovie(route.params.movieId));
</script>

<template>
  <Spinner v-if="loading" />
  <div v-else>
    <BreadCrumb :movieTitle="state.original_title" />
    <MovieInfo :movie="state" />
  </div>
</template>

<style scoped></style>
