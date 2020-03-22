import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = (resolve) => {
  import('components/home/home').then((module) => {
    resolve(module)
  })
}

const Me = (resolve) => {
  import('components/me/me').then((module) => {
    resolve(module)
  })
}

const Share = (resolve) => {
  import('components/share/share').then((module) => {
    resolve(module)
  })
}

const Login = (resolve) => {
  import('components/login/login').then((module) => {
    resolve(module)
  })
}

const Member = (resolve) => {
  import('components/member/member').then((module) => {
    resolve(module)
  })
}

const Integral = (resolve) => {
  import('components/integral/integral').then((module) => {
    resolve(module)
  })
}

export default new Router({
  // mode: 'history',
  // 以上注释去除地址栏#
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        title: '首页',
        type: 'login'
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页',
        type: 'login'
      }
    },
    {
      path: '/me',
      component: Me,
      meta: {
        title: '个人中心',
        type: 'login'
      }
    },
    {
      path: '/share',
      component: Share,
      meta: {
        title: '分享',
        type: 'login'
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '登录',
        type: ''
      }
    },
    {
      path: '/member',
      component: Member,
      meta: {
        title: '会员中心',
        type: 'login'
      }
    },
    {
      path: '/integral',
      component: Integral,
      meta: {
        title: '积分兑换',
        type: 'login'
      }
    }
  ]
})
