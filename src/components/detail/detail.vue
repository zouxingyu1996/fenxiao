<template>
  <transition name="slide">
    <div class="detail">
      <div class="header">
        <span class="iconfont icon-jiantouarrowhead7" @click="back"></span>
        <span class="text">详情</span>
      </div>
      <div class="top">
        <img src="https://img14.360buyimg.com/n0/jfs/t1/51929/3/15031/172017/5dbfb0dfEe79ce5d6/55e6ce1663f3f835.jpg">
      </div>
      <div class="info">
        <div class="num">￥<span>99.99</span></div>
        <div class="bt">妙境云上茶业安化黑茶篓装野生天尖湖南特产正品礼盒装收藏送礼茶叶 云脉篓装天尖500G</div>
        <div class="tips acea-row row-between-wrapper">
          <div class="item">库存：99件</div>
          <div class="item">已售：9件</div>
        </div>
      </div>
      <div class="choice">
        <van-field
          readonly
          clickable
          label="选择规格"
          :value="value"
          placeholder="请选择"
          @click="show = true"
        />
        <van-popup
          v-model="show"
          closeable
          position="bottom"
          :style="{ height: '50%' }">
            <div class="product-window">
              <div class="textpic acea-row row-between-wrapper">
                <div class="pictrue">
                  <img class="image" src="https://img14.360buyimg.com/n5/jfs/t1/78532/15/14751/125720/5dbfb0d0E5e0588aa/72986cab38b38b61.jpg">
                </div>
                <div class="text">
                  <div class="line1">妙境云上茶业安化黑茶篓装野生天尖湖南特产正品礼盒装收藏送礼茶叶 云脉篓装天尖500G</div>
                  <div class="money">
                    ￥<span class="num">0.00</span>
                    <span class="stock">库存: 0</span>
                  </div>
                </div>
                </div>
              <div class="productWinList">
                <div class="item">
                  <div class="title">颜色</div>
                  <div class="listn acea-row row-middle">
                    <div class="itemn on">黑色</div>
                    <div class="itemn">白色</div>
                  </div>
                </div>
              </div>
              <div class="cart">
                <div class="title">数量</div>
                <div class="carnum acea-row row-left">
                  <div class="item reduce on">-</div>
                  <div class="item num">1</div>
                  <div class="item plus on">+</div>
                </div>
              </div>
            </div>
        </van-popup>
      </div>
      <div class="introduce">
        <div class="title">产品介绍</div>
        <div class="cen">
          <img src="http://img30.360buyimg.com/popWaterMark/jfs/t1/98886/14/3283/183843/5ddfe44dE229dca0e/ed722ac0b64b03f7.jpg">
          <img src="https://img10.360buyimg.com/imgzone/jfs/t28591/337/559640037/303127/343cd514/5bf7917aN32121b32.png">
        </div>
      </div>
      <div class="bottom">
        <div class="pay">立即购买</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      value: '',
      show: false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  },
  methods: {
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    },
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .detail
    position fixed
    top 0
    bottom 0
    z-index 100
    width 100%
    background #f5f5f5
    overflow-y scroll
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
      position fixed
      top 0
      border-bottom 1px solid #999
      color #fff
      background rgba(0,0,0,.2)
      .iconfont
        position absolute
        left 0
        font-size 0.36rem
        width 1rem
        text-align center
      .text
        font-size .36rem
        font-weight 700
    .top
      width 100%
      height 7.5rem
      img
        width 100%
        height 100%
    .info
      padding .3rem
      background #fff
      margin .2rem 0
      .num
        font-size .28rem
        color #fc8535
        font-weight 700
        span
          font-size .48rem
          font-weight 700
      .bt
        margin .3rem 0
        font-weight 700
      .tips
        font-size .24rem
        color #82848f
    .choice
      .product-window
        .textpic
          padding 0 1.3rem 0 .3rem
          margin-top .29rem
          .pictrue
            width 1.5rem
            height 1.5rem
            img
              height 100%
              width 100%
              border-radius .1rem
          .text
            width: 4.1rem
            color: #202020
            .line1
              text-overflow ellipsis
              overflow hidden
              white-space nowrap
            .money
              font-size .24rem
              margin-top .4rem
              color #fc8535
              .num
                font-size .36rem
              .stock
                color #999999
                margin-left .18rem
        .productWinList
          max-height 3.95rem
          overflow auto
          margin-top .36rem
          .title
            font-size .3rem
            color #999
            padding 0 .3rem
          .listn
            padding 0 .3rem 0 .16rem
            .itemn
              border 1px solid #bbb
              font-size .26rem
              color #282828
              padding .07rem .33rem
              border-radius .06rem
              margin .14rem 0 0 .14rem
              text-shadow 0 0 black
        .cart
          margin-top .36rem
          padding 0 .3rem
          .title
            font-size .3rem
            color #999
          .carnum
            height: .54rem
            margin-top: .24rem
            .num
              font-size .28rem !important
            .item
              border: 1px solid #a4a4a4
              width: .84rem
              text-align: center
              height: 100%
              line-height: .54rem
              color: #a4a4a4
              font-size: .45rem
    .introduce
      margin-top .2rem
      .title
        background #fff
        line-height 1rem
        text-align center
      .cen
        width 100%
        img
          width 100%
    .bottom
      position fixed
      z-index 9999
      width 100%
      height 1rem
      bottom 0
      background #fff
      border-top 1px solid #f0f0f0
      display flex
      align-items center
      justify-content: flex-end;
      .pay
        width 2.4rem
        height .76rem
        font-size: 0.28rem;
        color: #fff;
        border-radius: 0.5rem;
        text-align: center;
        line-height: .76rem;
        background-color: #fc8535;
        margin-right .3rem
</style>
