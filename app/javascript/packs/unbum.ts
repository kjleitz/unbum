import Vue from 'vue';
import App from 'UnbumApp.vue';

document.addEventListener('DOMContentLoaded', () => {
  /* eslint-disable no-new */
  new Vue({
    el: '#unbum-hook',
    render: h => h(App),
  });
  /* eslint-enable no-new */
});
