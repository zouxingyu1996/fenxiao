<template>
  <transition name="slide">
    <div class="login">
      <div class="header">
        <span class="iconfont icon-jiantouarrowhead7" @click="back"></span>
        <span class="text" v-if="type == 1">会员登录</span>
        <span class="text" v-if="type == 2">免费注册</span>
      </div>
      <div class="icon file-row">
        <div class="cen file-row">
          <span class="iconfont icon-touxiang"></span>
        </div>
      </div>
      <div class="box" v-if="type == 1">
        <div class="input file-row">
          <span>账号</span>
          <input placeholder="请输入手机号">
        </div>
        <div class="input file-row">
          <span>密码</span>
          <input placeholder="请输入密码">
        </div>
        <div class="btn" @click="logon">登录</div>
        <div class="register">
          <span @click="register">免费注册</span>
        </div>
      </div>
      <div class="box" v-if="type == 2">
        <div class="input file-row">
          <span>手机</span>
          <input placeholder="请输入手机号">
        </div>
        <div class="input file-row">
          <span>密码</span>
          <input placeholder="请输入密码">
        </div>
        <div class="input file-row">
          <span>确认密码</span>
          <input placeholder="请再次输入密码">
        </div>
        <div class="input file-row">
          <span>姓名</span>
          <input placeholder="请输入姓名">
        </div>
        <div class="btn">注册</div>
        <div class="register">
          <span @click="login">去登录</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      type: 1
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    register () {
      this.type = 2
    },
    login () {
      this.type = 1
    },
    logon () {
      window.localStorage.setItem('login', '狐离')
      this.$router.push({ path: this.redirect || '/' })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .login
    position fixed
    top 0
    bottom 0
    z-index 100
    width 100%
    background #fff
    &.slide-enter-active, &.slide-leave-active
      transition all .3s
    &.slide-enter, &.slide-leave-to
      transform translate3d(100%, 0, 0)
    .header
      height 1rem
      width 100%
      line-height 1rem
      display flex
      align-items center
      justify-content center
      border-bottom 1px solid #eee
      .iconfont
        position absolute
        left 0
        font-size 0.36rem
        width 1rem
        text-align center
      .text
        font-size .36rem
    .icon
      .cen
        width: 1.4rem
        height: 1.4rem
        border-radius: 50%
        margin-top: .75rem
        margin-bottom: .25rem
        background-color: #dfe0e2
        position: relative
        overflow: hidden
        .iconfont
          margin-top .5rem
          color #f8f8f8
          font-size 1rem
    .box
      padding 0 .5rem
      .input
        position relative
        span
          position absolute
          left 0
        input
          width 100%
          height: 1rem;
          line-height: 1rem;
          padding-left: 1.5rem;
          border: none;
          border-bottom: 1px solid #eee;
          padding-top: 0;
          padding-bottom: 0;
      .btn
        font-size .38rem
        text-align center
        margin: .5rem 0;
        color: #fff;
        background-color: rgba(66,189,86,1)
        height: 1rem;
        line-height: 1rem;
        border-radius: .1rem;
      .register
        font-size .26rem
        color #666
        text-align center
</style>
