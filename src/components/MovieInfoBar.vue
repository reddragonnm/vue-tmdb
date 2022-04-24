<script setup>
  import { calcTime, convertMoney } from "@/api/helpers";
  const props = defineProps({
    time: {
      type: Number,
      required: true,
    },

    budget: {
      type: Number,
      required: true,
    },

    revenue: {
      type: Number,
      required: true,
    },
  });
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="column">
        <p>Running Time: {{ calcTime(props.time) }}</p>
      </div>

      <div class="column">
        <p>Budget: {{ convertMoney(props.budget) }}</p>
      </div>

      <div class="column">
        <p>Revenue: {{ convertMoney(props.revenue) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    align-items: center;
    min-height: 100px;
    background-color: var(--dark-grey);
    padding: 0 20px;
  }

  .content {
    display: flex;
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;

    .column {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--med-grey);
      border-radius: 20px;
      margin: 0 20px;
      flex: 1;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    @media screen and (max-width: 768px) {
      display: block;

      .column {
        margin: 20px 0;
      }
    }
  }
</style>
