<template>
  <div class="incrementor">
    <button
      class="incrementor-button"
      @click="$emit('input', value + 1)"
    >
      +
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<style lang="sass" scoped>
.incrementor-button
  font-size: 3em
</style>
