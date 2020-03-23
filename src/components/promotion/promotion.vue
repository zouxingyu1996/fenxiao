<template>
  <transition name="slide">
    <div class="promotion">
      <div class="header">
        <div class="back" @click="back"><span class="iconfont icon-jiantouarrowhead7"></span></div>
        <div class="top">当前佣金</div>
        <div class="cen">0.00</div>
        <div class="bottom acea-row row-between-wrapper">
          <div class="fl">
            <div class="bt">昨日佣金</div>
            <div class="num">0</div>
          </div>
          <div class="fr">
            <div class="bt">累计已提</div>
            <div class="num">0</div>
          </div>
        </div>
      </div>
      <div class="btn">
        <router-link tag="span" to="/cash">立即提现</router-link>
      </div>
      <div class="box">
        <router-link tag="div" class="item" to="/share">
          <span class="iconfont icon-erweima"></span>
          <div>我的二维码</div>
        </router-link>
        <router-link tag="div" class="item" to="/commission">
          <span class="iconfont icon-yongjin"></span>
          <div>佣金明细</div>
        </router-link>
        <router-link tag="div" class="item" to="/cashrecord">
          <span class="iconfont icon-jiludanzilishijilu"></span>
          <div>提现记录</div>
        </router-link>
        <router-link tag="div" class="item" to="/promoter_list">
          <span class="iconfont icon-tongji"></span>
          <div>推广统计</div>
        </router-link>
      </div>
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
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .promotion
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
      width 100%
      height 3.75rem
      background url("./bg.png")no-repeat
      background-size 100% 100%
      text-align center
      color #fff
      position relative
      .back
        position absolute
        left 0.25rem
        top 0.25rem
        width 1rem
        line-height 1rem
        .iconfont
          font-size .4rem
      .top
        padding-top .6rem
      .cen
        font-size .9rem
        margin-top .5rem
      .bottom
        padding 0 .3rem
        margin-top .5rem
        .fl
          min-width 2rem
          .bt
            font-size .24rem
            color rgba(255, 255, 255, 0.8)
            margin-bottom .1rem
        .fr
          min-width 2rem
          .bt
            font-size .24rem
            color rgba(255, 255, 255, 0.8)
            margin-bottom .1rem
    .btn
      text-align center
      position relative
      z-index 99
      span
        display block
        font-size .28rem
        color #fff
        width 2.58rem
        height .68rem
        border-radius .5rem
        text-align center
        line-height .68rem
        margin -.32rem auto 0 auto
        background-color #fc8535
    .box
      overflow hidden
      padding .3rem
      .item
        background #fff
        float left
        width calc(50% - .15rem)
        display flex
        align-items center
        justify-content center
        flex-flow column
        padding .6rem 0
        margin-bottom .3rem
        border-radius .2rem
        &:nth-child(2n)
          margin-left .15rem
        &:nth-child(2n - 1)
          margin-right .15rem
        .iconfont
          font-size .6rem
          display inline-block
          margin-bottom .4rem
          color #fc8535
</style>
