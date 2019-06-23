import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Introduce from '@/pages/introduce/Introduce'
import SwiperList from '@/pages/swiper-list/SwiperList'
import SwiperListDetail from '@/pages/swiper-list-detail/SwiperListDetail'
import WeekendDetail from '@/pages/weekend-detail/WeekendDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
  },{
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
},{
  path: '/introduce',
  name: 'Introduce',
  component: Introduce
},{
  path: '/swiper-list/:id',
  name: 'SwiperList',
  component: SwiperList
},{
  path: '/swiper-list/swiper-list-detail/:id',
  name: 'SwiperListDetail',
  component: SwiperListDetail
},{
  path: '/weekend-detail/:id',
  name: 'WeekendDetail',
  component: WeekendDetail
}],
scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
})
