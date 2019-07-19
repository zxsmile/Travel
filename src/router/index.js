import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Introduce from '@/pages/introduce/Introduce'
import SwiperList from '@/pages/swiper-list/SwiperList'
import SwiperListDetail from '@/pages/swiper-list-detail/SwiperListDetail'
import WeekendDetail from '@/pages/weekend-detail/WeekendDetail'
import WeekendIntroduce from '@/pages/weekend-introduce/WeekendIntroduce'
import ListIntroduce from '@/pages/list-introduce/ListIntroduce'
import SearchDetail from '@/pages/search-detail/SearchDetail'
import SearchIntroduce from '@/pages/search-introduce/SearchIntroduce'
import SwiperListDate from '@/pages/swiper-list-date/SwiperListDate'
import WeekendDate from '@/pages/weekend-date/WeekendDate'
import RecommandDate from '@/pages/recommand-date/RecommandDate'


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
    path: '/detail/:parentId',
    name: 'Detail',
    component: Detail
},{
  path: '/swiper-list/:parentId/swiper-list-detail/:listId/introduce',
  name: 'Introduce',
  component: Introduce
},{
  path: '/swiper-list/:parentId',
  name: 'SwiperList',
  component: SwiperList
},{
  path: '/swiper-list/:parentId/swiper-list-detail/:listId',
  name: 'SwiperListDetail',
  component: SwiperListDetail
},{
  path: '/weekend-detail/:parentId',
  name: 'WeekendDetail',
  component: WeekendDetail
},{
  path: '/weekend-detail/:parentId/introduce',
  name: 'WeekendIntroduce',
  component: WeekendIntroduce
},{
  path: '/detail/:parentId/introduce',
  name: 'ListIntroduce',
  component: ListIntroduce
},{
  path: '/search-detail/:id',
  name: 'SearchDetail',
  component: SearchDetail
},{
  path: '/search-detail/:id/introduce',
  name: 'SearchIntroduce',
  component: SearchIntroduce
},{
  path: '/swiper-list/:parentId/swiper-list-detail/:listId/date',
  name: 'SwiperListDate',
  component: SwiperListDate
},{
  path: '/weekend-detail/:parentId/date',
  name: 'WeekendDate',
  component: WeekendDate
},{
  path: '/detail/:parentId/date',
  name: 'RecommandDate',
  component: RecommandDate
}],
scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
})
