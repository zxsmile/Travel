// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick  from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/iconfont.css'
import './assets/styles/reset.css'
// import './assets/styles/border.css'
import 'swiper/dist/css/swiper.css'
import store from './store'
const Bus= new Vue()


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{Bus},
  router,
  store,
  components: { App },
  template: '<App/>'
})
