<script setup>
  const props = defineProps(["header", "children"]);
</script>

<template>
  <div class="wrapper">
    <h1>{{ props.header }}</h1>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 20px;

    h1 {
      color: var(--med-grey);
    }

    h1 {
      @media screen and (max-width: 768px) {
        font-size: var(--font-big);
      }
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
  }
</style>
