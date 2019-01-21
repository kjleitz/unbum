<template>
  <div class="unbum-container">
    <div class="button-area">
      <Incrementor
        v-model="daysUnbummed"
        :disabled="submitting || alreadyUnbummed"
        class="days-unbummed-counter"
      />
      <div class="days-unbummed">
        {{ daysUnbummed }} DAYS UNBUMMED
      </div>
      <div class="last-unbummed">
        last unbummed: {{ lastUnbummed.toLowerCase() }}
      </div>
      <button
        class="reset btn btn-danger"
        @click="daysUnbummed = 0"
      >
        i fucked up
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Incrementor from 'unbum/components/Incrementor.vue';
import config from 'unbum/config';
import { humanDate, isToday } from 'base/concerns/dateUtils';

export default Vue.extend({
  components: {
    Incrementor,
  },

  data() {
    return {
      daysUnbummed: config.daysUnbummed,
      lastUnbummedAt: config.lastUnbummedAt,
      submitting: false,
    };
  },

  computed: {
    lastUnbummed(): string {
      return humanDate(this.lastUnbummedAt);
    },

    alreadyUnbummed(): boolean {
      return isToday(this.lastUnbummedAt);
    },
  },

  watch: {
    daysUnbummed(newVal: number, oldVal: number): void {
      if (newVal === oldVal) return;
      this.lastUnbummedAt = new Date();
      fetch(`/users/${config.userId}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          [config.csrfParam]: config.csrfToken,
          days_unbummed: newVal,
        }),
      });
    },
  },

  // mounted(): {

  // },
});
</script>

<style lang="sass" scoped>
.unbum-container
  .button-area
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    width: 100%
    height: 100vh
    .reset
      position: absolute
      bottom: 0
      right: 0
      margin: 1em
    .days-unbummed-counter
      margin: 1em
    .days-unbummed
      font-size: 2em
    .last-unbummed
      // font-style: italic
      color: rgba(0, 0, 0, 0.25)
</style>
