// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Consumption from '../../components/consumption/Index.vue'
// import '../../css/cmui.css'



Vue.config.productionTip = false

import common from '../../assets/common.js';
Vue.prototype.common = common
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#consumption',
  // router,
  components: { Consumption },
  template: '<consumption/>'
})
