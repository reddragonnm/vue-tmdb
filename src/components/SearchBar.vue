<script setup>
  import { ref, watch } from "vue";
  const emit = defineEmits(["search"]);

  const text = ref("");
  let timer = null;

  watch(text, (value) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      emit("search", value);
    }, 500);
  });
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <img src="@/assets/search-icon.svg" alt="search icon" />
      <input type="text" v-model="text" placeholder="Search Movie" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    align-items: center;
    height: 100px;
    background: var(--dark-grey);
    padding: 0 20px;
    outline: none;
  }

  .content {
    position: relative;
    max-width: var(--max-width);
    width: 100%;
    height: 55px;
    background: var(--med-grey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    img {
      position: absolute;
      left: 15px;
      top: 14px;
      width: 30px;
    }

    input {
      font-size: 28px;
      position: absolute;
      left: 0px;
      margin: 8px 0;
      padding: 0 0 0 60px;
      border: 0;
      width: 95%;
      background: transparent;
      height: 40px;
      color: var(--white);

      :focus {
        outline: none;
      }

      @media screen and (max-width: 720px) {
        font-size: 28px;
      }
    }

    :focus {
      outline: none;
    }
  }
</style>
