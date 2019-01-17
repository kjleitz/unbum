<template>
  <div class="unbum-app">
    <UnbumContainer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UnbumContainer from 'unbum/components/UnbumContainer.vue';

export default Vue.extend({
  components: {
    UnbumContainer,
  },
});
</script>

<style lang="sass">
body, body *
  box-sizing: content-box
</style>
