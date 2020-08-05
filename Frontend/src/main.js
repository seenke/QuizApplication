import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
