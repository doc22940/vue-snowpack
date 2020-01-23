import Vue from 'vue/dist/vue.esm.browser';
import HiVue from './components/HiVue.js';

new Vue({
  el: '#app',
  components: { HiVue },
  template: `<hi-vue name="Vue" />`,
});
