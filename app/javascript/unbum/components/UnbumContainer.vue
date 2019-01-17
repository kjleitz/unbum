<template>
  <div class="unbum-container">
    <div class="reset-area">
      <button
        class="reset"
        @click="daysUnbummed = 0"
      >
        i fucked up
      </button>
    </div>
    <div class="button-area">
      <Incrementor
        v-model="daysUnbummed"
        class="days-unbummed-counter"
      />
      <div class="days-unbummed">
        {{ daysUnbummed }} DAYS UNBUMMED
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Incrementor from 'unbum/components/Incrementor.vue';

export default Vue.extend({
  components: {
    Incrementor,
  },

  data() {
    return {
      daysUnbummed: 0,
    };
  },
});
</script>

<style lang="sass" scoped>
.unbum-container
  .reset-area
    position: fixed
    top: 0
    right: 0
    margin: 1em
  .button-area
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    width: 100%
    height: 100vh
    .days-unbummed-counter
      margin: 1em
    .days-unbummed
      font-size: 2em
</style>
