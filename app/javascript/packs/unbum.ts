import Vue from 'vue';
import App from 'App.vue';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('div'));

  /* eslint-disable no-new */
  new Vue({
    el,
    render: h => h(App),
  });
  /* eslint-enable no-new */
});
