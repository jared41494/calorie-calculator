import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/sass/index.sass'
import App from './App.vue'
import './registerServiceWorker'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
