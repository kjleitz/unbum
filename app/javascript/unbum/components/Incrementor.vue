<template>
  <div class="incrementor">
    <button
      v-bind="$attrs"
      class="incrementor-button btn btn-primary"
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
  padding: 0.5em 1em
</style>
