<template>
  <transition name="slide">
    <div class="recharge">
      <div class="header">
        <span class="iconfont icon-jiantouarrowhead7" @click="back"></span>
        <span class="text">余额充值</span>
      </div>
      <div class="box">
        <div class="info-wrapper">
          <div class="money">
            <span>￥</span>
            <input type="number" placeholder="0.00">
          </div>
          <div class="tips">
            提示：当前余额为<span>￥0.00</span>
          </div>
          <div class="pay-btn" @click="pay">
            立即充值
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
export default {
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    pay () {
      Toast('暂未开放')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .recharge
    position fixed
    top 0
    bottom 0
    z-index 100
    width 100%
    background #f5f5f5
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
      border-bottom 1px solid #eee
      background #fff
      .iconfont
        position absolute
        left 0
        font-size 0.36rem
        width 1rem
        text-align center
      .text
        font-size $font-size-large
        font-weight 700
    .box
      padding .5rem .63rem .45rem
      background-color #fff
      margin 1rem .3rem 0
      border-radius .1rem
      .info-wrapper
        text-align center
        .money
          margin-top .6rem
          padding-bottom .2rem
          border-bottom 1px dashed #ddd
          span
            font-size .56rem
            color #333
            font-weight 700
          input
            display inline-block
            width 3rem
            font-size .84rem
            text-align center
            color #282828
            font-weight 700
            padding-right .7rem
        .tips
          font-size .26rem
          color #888
          margin .25rem auto 0 auto
          line-height 1.5
          padding 0 .3rem
        .pay-btn
          display block
          width 5.5rem
          height .86rem
          margin .5rem auto 0 auto
          line-height .86rem
          text-align center
          color #fff
          border-radius .5rem
          font-size .3rem
          font-weight 700
          background-color #e93323
</style>
