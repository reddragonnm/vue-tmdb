<script setup>
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    character: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <div class="wrapper">
    <img :src="props.imageUrl" alt="Actor image" />
    <h3>{{ props.name }}</h3>
    <p>{{ props.character }}</p>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    color: var(--white);
    background-color: var(--dark-grey);
    border-radius: 20px;
    padding: 5px;
    text-align: center;

    h3 {
      margin: 10px 0 0 0;
    }

    p {
      margin: 5px 0;
    }
  }

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
  }
</style>
