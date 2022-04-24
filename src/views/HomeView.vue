<script setup>
  // vue
  import { ref, onMounted, watch } from "vue";

  // api
  import API from "@/api/API";
  import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "@/api/config";
  import { isPersistedState } from "@/api/helpers";

  // components
  import HeroImage from "@/components/HeroImage.vue";
  import SearchBar from "@/components/SearchBar.vue";
  import Grid from "@/components/Grid.vue";
  import Thumbnail from "@/components/Thumbnail.vue";
  import Spinner from "@/components/Spinner.vue";
  import Button from "@/components/Button.vue";

  // initial state
  const initalState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };

  // component states
  const state = ref(initalState);
  const loading = ref(true);
  const searchTerm = ref("");

  // component methods
  const fetchMovies = async (page, searchTerm = "") => {
    try {
      loading.value = true;

      const data = await API.fetchMovies(searchTerm, page);
      state.value = {
        ...data,
        results: [...state.value.results, ...data.results],
      };

      loading.value = false;
    } catch (err) {
      console.error(err);
    }
  };

  const setSearchTerm = (value) => {
    searchTerm.value = value;
    state.value = initalState;
    fetchMovies(1, searchTerm.value);
  };

  // lifecycle methods
  onMounted(() => {
    fetchMovies(1);
  });
</script>

<template>
  <HeroImage
    v-if="state.results.length > 0 && !searchTerm"
    :image="`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`"
    :title="state.results[0].original_title"
    :text="state.results[0].overview"
  />

  <SearchBar @search="setSearchTerm" />

  <Grid
    :header="
      searchTerm
        ? `Search Result: ${state.total_results} results`
        : 'Popular movies'
    "
  >
    <Thumbnail
      v-for="movie in state.results"
      :key="movie.id"
      :movieId="movie.id"
      :clickable="true"
      :image="
        movie.poster_path
          ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
          : null
      "
    />
  </Grid>

  <Spinner v-show="loading" />

  <Button
    v-if="!loading && state.page < state.total_pages"
    text="Load More"
    @click="fetchMovies(state.page + 1, searchTerm)"
  />
</template>
