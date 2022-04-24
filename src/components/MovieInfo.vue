<script setup>
  import Thumbnail from "./Thumbnail.vue";
  import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "@/api/config";

  const props = defineProps(["movie"]);
  const backgroundCss = props.movie.backdrop_path
    ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path})`
    : "var(--dark-grey)";
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <Thumbnail
        :movieId="props.movie.id"
        :clickable="false"
        :image="
          props.movie.poster_path
            ? IMAGE_BASE_URL + POSTER_SIZE + props.movie.poster_path
            : null
        "
      />

      <div class="text">
        <h1>{{ props.movie.title }}</h1>
        <h3>PLOT</h3>
        <p>{{ props.movie.overview }}</p>

        <div class="rating-director">
          <div>
            <h3>RATING</h3>
            <div class="score">{{ props.movie.vote_average }}</div>
          </div>
          <div class="director">
            <h3>
              DIRECTOR<span v-if="props.movie.directors.length > 1">S</span>
            </h3>
            <p
              v-for="director in props.movie.directors"
              :key="director.credit_id"
            >
              {{ director.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    background: v-bind(backgroundCss) no-repeat;
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieinfo 1s;

    @keyframes animateMovieinfo {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .content {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 20px;

    @media screen and (max-width: 768px) {
      display: block;
      max-height: none;
    }
  }

  .text {
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    overflow: hidden;

    .rating-director {
      display: flex;
      justify-content: flex-start;
    }
    .score {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      background: #fff;
      color: #000;
      font-weight: 800;
      border-radius: 25px;
      margin: 0px 0 0 0;
    }
    .director {
      margin: 0 0 0 40px;
      p {
        margin: 0;
      }
    }
    h1 {
      @media screen and (max-width: 768px) {
        font-size: var(--fontBig);
      }
    }
  }
</style>
