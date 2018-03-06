// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/css/app.css'
import {init} from'./assets/js/adaptive.js'
import Index from './components/Index.vue'
import Mine from './components/mine/Mine.vue'
import Now from  './components/mine/Now.vue'
import Soon from  './components/mine/Soon.vue'
import Ranking from  './components/mine/Ranking.vue'
import Derails from './components/mine/Derails.vue'
Vue.use(init)
Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router=new VueRouter({
  routes:[
    {path:'/index',component:Index},
    {path:'/mine',component:Mine,
      children:[
        {path:'now',component:Now},
        {path:'soon',component:Soon},
        {path:'ranking',component:Ranking},
        {path:'',redirect:'now'},
      ]
    },
    {path:'/derails/:sub',component:Derails,name:'derails'},
    {path:'/',redirect:'index'}
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
