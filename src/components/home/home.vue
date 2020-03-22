<template>
  <div class="home">
    <div class="header">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav">
      <div class="item acea-row row-between-wrapper">
        <div class="li">
          <img src="./1.png">标签一
        </div>
        <div class="li">
          <img src="./2.png">标签二
        </div>
        <div class="li">
          <img src="./3.png">标签三
        </div>
        <div class="li">
          <img src="./4.png">标签四
        </div>
      </div>
      <div class="item acea-row row-between-wrapper">
        <div class="li">
          <img src="./5.png">标签五
        </div>
        <div class="li">
          <img src="./6.png">标签六
        </div>
        <div class="li">
          <img src="./7.png">标签七
        </div>
        <div class="li">
          <img src="./8.png">标签八
        </div>
      </div>
    </div>
    <div class="new acea-row row-between-wrapper">
      <img class="tips" src="./new.png">
      <div class="cen acea-row row-between-wrapper">
        <div class="item">狐*通过分享获得28元返利</div>
        <span class="iconfont icon-jiantouarrow487"></span>
      </div>
    </div>
    <div class="box">
      <div class="top">
        <div class="fl">
          <div class="bt">景点赞助包</div>
          <div class="tips">云台山风景区、套票包</div>
        </div>
      </div>
      <div class="ban">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=718084406,3832063102&fm=15&gp=0.jpg">
      </div>
      <div class="shop">
        <div class="item">
          <div class="fl"><img src="https://17439221.s21i.faiusr.com/2/ABUIABACGAAg-ZvY3AUo_uOggQYw3gI4_gE.jpg.webp"></div>
          <div class="fr">
            <div class="bt">云台山风景区普通门票包</div>
            <div class="price"><span>￥</span>498.00</div>
            <div class="num">已购288套</div>
            <div class="btn"><span class="iconfont icon-gouwuche"></span></div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="item">
          <div class="fl"><img src="https://17439221.s21i.faiusr.com/2/ABUIABACGAAgt-nh3AUo2bfyaTCAIDiAGA!500x500.jpg"></div>
          <div class="fr">
            <div class="bt">云台山风景区豪华门票包</div>
            <div class="price"><span>￥</span>4980.00</div>
            <div class="num">已购8套</div>
            <div class="btn"><span class="iconfont icon-gouwuche"></span></div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="item">
          <div class="fl"><img src="https://17439221.s21i.faiusr.com/2/ABUIABACGAAgo-Xh3AUo77awowIwxwU48gI!300x300.jpg"></div>
          <div class="fr">
            <div class="bt">云台山风景区黄金门票包</div>
            <div class="price"><span>￥</span>49800.00</div>
            <div class="num">已购88套</div>
            <div class="btn"><span class="iconfont icon-gouwuche"></span></div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="item">
          <div class="fl"><img src="https://17439221.s21i.faiusr.com/2/ABUIABACGAAggYzi3AUoiMWqmgQwkAM4rAI!300x300.jpg"></div>
          <div class="fr">
            <div class="bt">云台山风景区至尊门票包</div>
            <div class="price"><span>￥</span>498000.00</div>
            <div class="num">已购28套</div>
            <div class="btn"><span class="iconfont icon-gouwuche"></span></div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
    <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
import Tab from 'components/tab/tab'
import Vue from 'vue'
import { Lazyload } from 'vant'

Vue.use(Lazyload)
export default {
  components: {
    Tab
  },
  data () {
    return {
      images: [
        'http://www.winmobi.cn/uploads/allimg/180627/1-1P62G23Ab33.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089181326,1905143095&fm=26&gp=0.jpg'
      ]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .home
    padding-bottom 1.3rem
    .header
      width 100%
      height 3.75rem
      .van-swipe
        height 100%
        img
          width 100%
          height 100%
        .van-swipe__indicator
          width .2rem
          height .05rem
    .nav
      background #fff
      font-size .26rem
      padding-top .3rem
      .item
        padding-bottom .35rem
        .li
          width 25%
          text-align center
          img
            width .9rem
            height .9rem
            display block
            margin 0 auto .15rem
    .new
      height .77rem
      border-top 1px solid #f4f4f4
      padding 0 .3rem
      background #fff
      box-shadow 0 0.1rem 0.3rem #f5f5f5
      font-size .24rem
      justify-content normal
      .tips
        width 1.24rem
        height .28rem
        border-right 1px solid #ddd
        padding-right .23rem
        box-sizing content-box
        justify-content space-between
      .cen
        padding-left .23rem
        width 4.8rem
        .iconfont
          float right
    .box
      background #fff
      padding-bottom .5rem
      .top
        border-top 1px solid #f4f4f4
        font-size .32rem
        padding .3rem
        .bt
          font-weight 700
        .tips
          color #999
          font-size .26rem
          margin-top .2rem
      .ban
        height 2.5rem
        padding 0 .3rem
        img
          width 100%
          height 2.5rem
    .shop
      padding .3rem 0 .3rem .3rem
      .item
        padding-top .2rem
        .fl
          width 1.8rem
          height 1.8rem
          float left
          img
            width 100%
            height 100%
            border-radius .05rem
        .fr
          float left
          width calc(100% - 1.8rem)
          font-size .3rem
          box-sizing border-box
          padding-left .25rem
          position relative
          margin-top .1rem
          padding-bottom .2rem
          border-bottom 1px solid #f4f4f4
          .price
            font-size .34rem
            color #fc4141
            font-weight 700
            margin-top .5rem
            span
              font-size .26rem
          .num
            margin-top .3rem
            font-size .22rem
            color #aaa
            font-weight 400
          .btn
            position absolute
            right .3rem
            bottom .2rem
            width .5rem
            height .5rem
            border-radius: 50%
            font-size .3rem
            border 1px solid #ff3700
            line-height .5rem
            text-align center
            span
              color #ff3700
</style>
