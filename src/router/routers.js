import index from './index'

index.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const type = to.meta.type
  const path = to.path
  // 判断该路由是否需要登录权限
  if (type === 'login') {
    if (window.localStorage.getItem('login')) {
      next()
    } else {
      next('/login?redirect=' + path)
    }
  } else {
    next()
  }
})
