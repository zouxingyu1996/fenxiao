<template>
  <transition name="slide">
    <div class="set">
      <div class="list">
        <div class="item acea-row row-between-wrapper">
          <div>昵称</div>
          <div class="input">
            <input type="text" value="狐离">
          </div>
        </div>
        <div class="item acea-row row-between-wrapper">
          <div>ID号</div>
          <div class="input acea-row row-between-wrapper">
            <input type="text" disabled="disabled" class="id" value="1">
            <span class="iconfont icon-suoding"></span>
          </div>
        </div>
        <div class="item acea-row row-between-wrapper">
          <div>手机号码</div>
          <div class="input acea-row row-between-wrapper">
            <div class="input acea-row row-between-wrapper">
              <input type="text" disabled="disabled" class="id" value="18608490012">
              <span class="iconfont icon-suoding"></span>
            </div>
          </div>
        </div>
        <div>
          <a href="/change_password" class="item acea-row row-between-wrapper">
            <div>密码</div>
            <div class="input">点击修改密码<span class="iconfont icon-xiangyou"></span>
            </div>
          </a>
        </div>
      </div>
      <div class="modifyBnt">保存修改</div>
      <div class="logOut" @click="logOut">退出登录</div>
      <div class="back" @click="back">返回</div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    logOut () {
      window.localStorage.removeItem('login')
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .set
    position fixed
    top 0
    bottom 0
    z-index 100
    width 100%
    background #f5f5f5
    &.slide-enter-active, &.slide-leave-active
      transition all .3s
    &.slide-enter, &.slide-leave-to
      transform translate3d(100%, 0, 0)
    .list
      background-color #fff
      .item
        padding .3rem .3rem .3rem 0
        border-bottom 1px solid #f2f2f2
        margin-left .3rem
        font-size .32rem
        color #282828
        .input
          color #868686
          text-align right
          width 4.15rem
          input
            background none
            text-align right
          .id
            width 3.6rem
    .modifyBnt
      height .9rem
      text-align center
      color #fff
      border-radius .5rem
      line-height .9rem
      margin .76rem .3rem 0
      background #fc8535
    .logOut
      height .9rem
      text-align center
      color #fff
      border-radius .5rem
      line-height .9rem
      margin .76rem .3rem 0
      background #ef8844
    .back
      height .9rem
      text-align center
      color #fc8535
      border-radius .5rem
      line-height .9rem
      margin .76rem .3rem 0
      border 1px solid #fc8535
</style>
