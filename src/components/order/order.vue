<template>
  <transition name="slide">
    <div class="order">
      <div class="top">
        <div class="info acea-row row-between-wrapper">
          <div class="text">
            <div class="name">订单信息</div>
            <div class="num">累计订单：0 总消费：￥0</div>
          </div>
          <div class="back" @click="back"><span class="iconfont">返回</span></div>
        </div>
      </div>
      <div class="nav">
        <div class="item" :class="active == 1 ? 'active' : ''" @click="active = 1">
          <div class="text">待发货</div>
          <div class="num">0</div>
        </div>
        <div class="item" :class="active == 2 ? 'active' : ''" @click="active = 2">
          <div class="text">已发货</div>
          <div class="num">0</div>
        </div>
        <div class="item" :class="active == 3 ? 'active' : ''" @click="active = 3">
          <div class="text">待评价</div>
          <div class="num">0</div>
        </div>
        <div class="item" :class="active == 4 ? 'active' : ''" @click="active = 4">
          <div class="text">已完成</div>
          <div class="num">0</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      active: 1
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
  .order
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
    .top
      background linear-gradient(to right, #fd972b , #fc6416)
      height 2.6rem
      width 100%
      position relative
      color #fff
      .back
        position absolute
        right .2rem
        top 0
        width 1rem
        line-height 1rem
        text-align center
    .info
      height 1.9rem
      padding 0 .3rem
      .name
        font-size .34rem
        font-weight 700
        color #fff
        margin-bottom .3rem
      .num
        color hsla(0,0%,100%,.8)
        font-size .26rem
    .nav
      background-color #fff
      height 1.4rem
      border-radius .06rem
      margin -.73rem .3rem 0
      position relative
      z-index 99
      font-size .28rem
      .item
        width 25%
        float left
        height 1.4rem
        display flex
        align-items center
        justify-content center
        flex-flow column
        position relative
        &.active
          div
            font-weight 700
          &:after
            content ''
            position absolute
            width .5rem
            height 2px
            background #fc8535
            bottom 0
            left 50%
            margin-left -.25rem
        .text
          margin-bottom .2rem
</style>
