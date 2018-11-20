// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Business from '../../components/business/Index.vue'
// import '../../css/cmui.css'



Vue.config.productionTip = false

import common from '../../assets/common.js';
Vue.prototype.common = common
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#business',
  // router,
  components: { Business },
  template: '<business/>'
})
