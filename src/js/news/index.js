// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import News from '../../components/news/Index.vue'
// import '../../css/cmui.css'

Vue.config.productionTip = false

import common from '../../assets/common.js';
Vue.prototype.common = common
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#news',
  // router,
  components: { News },
  template: '<news/>'
})
