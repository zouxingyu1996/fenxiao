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

const Find = (resolve) => {
  import('components/find/find').then((module) => {
    resolve(module)
  })
}

const Promotion = (resolve) => {
  import('components/promotion/promotion').then((module) => {
    resolve(module)
  })
}

const PromoterList = (resolve) => {
  import('components/promoter_list/promoter_list').then((module) => {
    resolve(module)
  })
}

const Commission = (resolve) => {
  import('components/commission/commission').then((module) => {
    resolve(module)
  })
}

const Cashrecord = (resolve) => {
  import('components/cashrecord/cashrecord').then((module) => {
    resolve(module)
  })
}

const Cash = (resolve) => {
  import('components/cash/cash').then((module) => {
    resolve(module)
  })
}

const Recharge = (resolve) => {
  import('components/recharge/recharge').then((module) => {
    resolve(module)
  })
}

const Order = (resolve) => {
  import('components/order/order').then((module) => {
    resolve(module)
  })
}

const Set = (resolve) => {
  import('components/set/set').then((module) => {
    resolve(module)
  })
}

const Detail = (resolve) => {
  import('components/detail/detail').then((module) => {
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
    },
    {
      path: '/find',
      component: Find,
      meta: {
        title: '发现',
        type: 'login'
      }
    },
    {
      path: '/promotion',
      component: Promotion,
      meta: {
        title: '推广佣金',
        type: 'login'
      }
    },
    {
      path: '/promoter_list',
      component: PromoterList,
      meta: {
        title: '推广统计',
        type: 'login'
      }
    },
    {
      path: '/commission',
      component: Commission,
      meta: {
        title: '佣金明细',
        type: 'login'
      }
    },
    {
      path: '/cashrecord',
      component: Cashrecord,
      meta: {
        title: '提现记录',
        type: 'login'
      }
    },
    {
      path: '/cash',
      component: Cash,
      meta: {
        title: '提现',
        type: 'login'
      }
    },
    {
      path: '/recharge',
      component: Recharge,
      meta: {
        title: '余额充值',
        type: 'login'
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        title: '订单列表',
        type: 'login'
      }
    },
    {
      path: '/set',
      component: Set,
      meta: {
        title: '设置',
        type: 'login'
      }
    },
    {
      path: '/detail',
      component: Detail,
      meta: {
        title: '详情',
        type: 'login'
      }
    }
  ]
})
