import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/pages/page/Page'
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
import OrderInformation from '@/pages/order-information/OrderInformation'
import WeekendOrderInformation from '@/pages/weekend-order-information/WeekendOrderInformation'
import RecommandOrderInformation from '@/pages/recommand-order-information/RecommandOrderInformation'
import SearchDate from '@/pages/search-date/SearchDate'
import SearchOrderInformation from '@/pages/search-order-information/SearchOrderInformation'
import SwiperListMapAddress from '@/pages/swiper-list-map-address/SwiperListMapAddress'
import RecommandMapAddress from '@/pages/recommand-map-address/RecommandMapAddress'
import WeekendMapAddress from '@/pages/weekend-map-address/WeekendMapAddress'
import SearchMapAddress from '@/pages/search-map-address/SearchMapAddress'
import Login from '@/pages/login/Login'
import Regist from '@/pages/regist/Regist'
import Admin from '@/pages/admin/Admin'
import AdminUsers from '@/pages/admin-users/AdminUsers'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page
    },{
      path: '/:cityId',
      name: 'Home',
      component: Home
    },{
      path: '/:id/city',
      name: 'City',
      component: City
  },{
    path: '/:cityId/detail/:parentId',
    name: 'Detail',
    component: Detail
},{
  path: '/:cityId/swiper-list/:parentId/swiper-list-detail/:listId/introduce',
  name: 'Introduce',
  component: Introduce
},{
  path: '/:cityId/swiper-list/:parentId',
  name: 'SwiperList',
  component: SwiperList
},{
  path: '/:cityId/swiper-list/:parentId/swiper-list-detail/:listId',
  name: 'SwiperListDetail',
  component: SwiperListDetail
},{
  path: '/:cityId/weekend-detail/:parentId',
  name: 'WeekendDetail',
  component: WeekendDetail
},{
  path: '/:cityId/weekend-detail/:parentId/introduce',
  name: 'WeekendIntroduce',
  component: WeekendIntroduce
},{
  path: '/:cityId/detail/:parentId/introduce',
  name: 'ListIntroduce',
  component: ListIntroduce
},{
  path: '/:cityId/search-detail/:id',
  name: 'SearchDetail',
  component: SearchDetail
},{
  path: '/:cityId/search-detail/:id/introduce',
  name: 'SearchIntroduce',
  component: SearchIntroduce
},{
  path: '/:cityId/search-detail/:parentId/date',
  name: 'SearchDate',
  component: SearchDate
},{
  path: '/:cityId/swiper-list/:parentId/swiper-list-detail/:listId/date',
  name: 'SwiperListDate',
  component: SwiperListDate
},{
  path: '/:cityId/weekend-detail/:parentId/date',
  name: 'WeekendDate',
  component: WeekendDate
},{
  path: '/:cityId/detail/:parentId/date',
  name: 'RecommandDate',
  component: RecommandDate
},{
  path: '/:cityId/swiper-list/:parentId/swiper-list-detail/:listId/order-information',
  name: 'OrderInformation',
  component: OrderInformation
},{
  path: '/:cityId/weekend-detail/:parentId/weekend-order-information',
  name: 'WeekendOrderInformation',
  component: WeekendOrderInformation
},{
  path: '/:cityId/detail/:parentId/recommand-order-information',
  name: 'RecommandOrderInformation',
  component:RecommandOrderInformation
},{
  path: '/:cityId/search-detail/:parentId/search-order-information',
  name: 'SearchOrderInformation',
  component: SearchOrderInformation
},{
  path: '/:cityId/swiper-list/:parentId/swiper-list-detail/:listId/swiper-list-map-address',
  name: 'SwiperListMapAddress',
  component: SwiperListMapAddress
},{
  path: '/:cityId/detail/:parentId/recommand-map-address',
  name: 'RecommandMapAddress',
  component: RecommandMapAddress
},{
  path: '/:cityId/weekend-detail/:parentId/weekend-map-address',
  name: 'WeekendMapAddress',
  component: WeekendMapAddress
},{
  path: '/:cityId/search-detail/:parentId/search-map-address',
  name: 'SearchMapAddress',
  component: SearchMapAddress
},{
  path: '/user/login',
  name: 'Login',
  component: Login
},{
  path: '/user/regist',
  name: 'Regist',
  component: Regist
},{
  path: '/admin/login',
  name: 'Admin',
  component: Admin
},{
  path: '/admin/users',
  name: 'AdminUsers',
  component: AdminUsers
}],
scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
})

