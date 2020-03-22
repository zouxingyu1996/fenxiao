// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

import Vant from 'vant'
import 'vant/lib/index.css'

import './router/routers' // permission control

import 'common/css/iconfont.css'
import 'common/stylus/index.styl'

Vue.use(Vant)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
