<script setup>
  import { calcTime, convertMoney } from "@/api/helpers";
  const props = defineProps(["time", "budget", "revenue"]);
</script>

<template>
  <div class="wrapper">
    <div class="content"></div>
  </div>
</template>

<style scoped>
  .wrapper {
  }

  .content {
  }
</style>
