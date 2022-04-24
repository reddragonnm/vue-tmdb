<script setup>
  // vue
  import { ref, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";

  // api
  import API from "@/api/API";
  import { IMAGE_BASE_URL, POSTER_SIZE } from "@/api/config";

  // components
  import Spinner from "@/components/Spinner.vue";
  import BreadCrumb from "@/components/BreadCrumb.vue";
  import MovieInfo from "@/components/MovieInfo.vue";
  import MovieInfoBar from "@/components/MovieInfoBar.vue";
  import Grid from "@/components/Grid.vue";
  import Actor from "@/components/Actor.vue";

  import noImg from "@/assets/no_image.jpg";

  const route = useRoute();
  const router = useRouter();

  // component states
  const movie = ref({});
  const loading = ref(false);

  // component methods
  const fetchMovie = async (movieId) => {
    try {
      loading.value = true;

      const movieData = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);

      const directors = credits.crew.filter(
        (member) => member.job === "Director"
      );
      movie.value = {
        ...movieData,
        actors: credits.cast,
        directors,
      };

      loading.value = false;
    } catch (err) {
      router.push({ name: "not-found" });
    }
  };

  // lifecycle methods
  watch(() => route.params.movieId, fetchMovie(route.params.movieId));
</script>

<template>
  <Spinner v-if="loading" />
  <div v-else>
    <BreadCrumb :movieTitle="movie.original_title" />
    <MovieInfo :movie="movie" />
    <MovieInfoBar
      :time="movie.runtime"
      :budget="movie.budget"
      :revenue="movie.revenue"
    />

    <Grid header="Actors">
      <Actor
        v-for="actor in movie.actors"
        :key="actor.credit_id"
        :name="actor.name"
        :character="actor.character"
        :imageUrl="
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : noImg
        "
      />
    </Grid>
  </div>
</template>
