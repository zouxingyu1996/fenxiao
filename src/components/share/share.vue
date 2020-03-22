<template>
  <transition name="slide">
    <div class="share">
      <div class="header">
        <span class="iconfont icon-jiantouarrowhead7" @click="back"></span>
        <span class="text">我的二维码</span>
      </div>
      <div class="cen">
        <div class="top">
          <div class="box">
            <img src="./CZ-YX-1.png">
          </div>
        </div>
        <div class="tips">
          <div class="bt">点击下方按钮分享给好友</div>
          <div class="text">提示：“复制链接”后在输入时粘贴发送给好友</div>
        </div>
      </div>
      <div class="bottom">
        <div class="fl">保存图片</div>
        <div class="fr">复制链接</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {}
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .share
    position fixed
    top 0
    bottom 0
    z-index 100
    width 100%
    background $color-background-d
    &.slide-enter-active, &.slide-leave-active
      transition: all .3s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
    .header
      height 1rem
      width 100%
      line-height 1rem
      display flex
      align-items center
      justify-content center
      position relative
      .iconfont
        extend-click()
        position absolute
        left .2rem
        font-size $font-size-large
      .text
        font-size $font-size-large
    .cen
      margin 1.2rem .3rem
      .top
        background $color-background-z
        height 5.5rem
        display flex
        align-items center
        justify-content center
        border-top-left-radius .2rem
        border-top-right-radius .2rem
        .box
          width 3.8rem
          height 3.8rem
          background url("./bg.png")no-repeat
          background-size 100% 100%
          display flex
          align-items center
          justify-content center
          img
            width 3.4rem
            height 3.4rem
      .tips
        font-size $font-size-medium
        color $color-text-l
        letter-spacing 2px
        padding 0 .3rem .3rem
        border-bottom-left-radius .2rem
        border-bottom-right-radius .2rem
        box-shadow 0 0 .3rem rgba(0, 0, 0, 0.11)
        .bt
          padding .3rem 0
          text-align center
        .text
          line-height 1.5
    .bottom
      position fixed
      bottom 0
      width 100%
      height 1rem
      line-height 1rem
      font-size $font-size-large
      text-align center
      border-top 1px solid #eee
      .fl
        width 50%
        float left
        background $color-background-z
        color #fff
      .fr
        width 50%
        float left
        color $color-background-z
</style>
