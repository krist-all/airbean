import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import Vueify from 'vueify'

Vue.config.productionTip = false
Vue.use(VModal)
Vue.use(Vueify)

new Vue({
  router,
  store,
  VModal,
  Vueify,
  render: h => h(App)
}).$mount('#app')
