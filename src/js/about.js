// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import About from '../components/About.vue'
// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#about',
  // router,
  components: { About },
  template: '<about/>'
})
