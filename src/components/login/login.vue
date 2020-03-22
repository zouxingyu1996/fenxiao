<template>
  <div class="login">
    <div class="logo">
      <div class="box">
        <img src="./logo.png">
      </div>
    </div>
    <div class="cen">
      <div class="top">
        <div class="item on">账号登录</div>
        <div class="item">快速登录</div>
      </div>
      <div class="list">
        <div class="item">
          <div class="input">
            <span class="iconfont icon-shoujihao"></span>
            <input placeholder="输入手机号码"/>
          </div>
        </div>
        <div class="item">
          <div class="input">
            <span class="iconfont icon-mima"></span>
            <input placeholder="填写登录密码"/>
          </div>
        </div>
        <div class="forgetPwd">
          <span class="iconfont icon-wangjimima"></span>忘记密码
        </div>
        <div class="logon" @click="logon">登录</div>
        <div class="tip">
          没有账号?<span class="font-color-red">立即注册</span>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    logon () {
      window.localStorage.setItem('login', '狐离')
      this.$router.push({ path: this.redirect || '/' })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .login
    width 100%
    height 100vh
    background-image -webkit-gradient(linear,left top,left bottom,from(#eb5447),to(#ff8e3b))
    background-image linear-gradient(180deg,#eb5447 0,#ff8e3b)
    background-image -moz-linear-gradient(to bottom,#eb5447 0,#ff8e3b 100%)
    .logo
      padding-top .5rem
      width 100%
      height 2rem
      .box
        width 1.72rem
        height 1.72rem
        border-radius 50%
        background-color hsla(0,0%,100%,.8)
        margin 0 auto
        display flex
        align-items center
        justify-content center
        img
          width 1.64rem
          height 1.64rem
          border-radius 50%
          display block
    .cen
      border-radius .16rem
      background-color: #fff
      margin .3rem .8rem 0
      padding .45rem .3rem 0 .3rem
      .top
        font-size .36rem
        color #282828
        text-align center
        font-weight 700
        display flex
        align-items center
        justify-content center
        .item
          &.on
            color #282828
            border-bottom-color #f35749
          color #999
          border-bottom .05rem solid #fff
          padding-bottom .1rem
          &:nth-child(2)
            margin-left .85rem
      .list
        .item
          border-bottom 1px solid #ededed
          padding .47rem 0 .13rem 0
          position relative
          .input
            display flex
            align-items center
            justify-content center
            span
              font-size .36rem
              margin-right .32rem
            input
              font-size .32rem
              width 100%
              line-height normal
              outline none
              border 0
              -webkit-appearance none
              border-radius 0
              background none
              box-sizing border-box
        .forgetPwd
          text-align right
          font-size: .28rem
          color #ccc
          margin-top .2rem
          .iconfont
            font-size .4rem
            margin-right .1rem
            vertical-align middle
        .logon
          font-size .34rem
          color #fff
          font-weight 700
          height .86rem
          border-radius .43rem
          background -webkit-gradient(linear,left top,right top,from(#f35447),to(#ff8e3c))
          background linear-gradient(90deg,#f35447 0,#ff8e3c)
          background -moz-linear-gradient(to right,#f35447 0,#ff8e3c 100%)
          text-align center
          line-height .86rem
          margin-top .47rem
        .tip
          height 1.1rem
          text-align center
          line-height 1.05rem
          font-size .3rem
          color #ccc
          .font-color-red
            color #fc4141!important
    .bottom
      background url("./icon01.png")
      background-repeat no-repeat
      background-size 100% 100%
      width calc(100% - 1.6rem)
      height .36rem
      margin 0 auto
</style>
