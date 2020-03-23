<template>
  <transition name="slide">
    <div class="member">
      <div class="header">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiperSlide>
            <div class="card card1">
              <div class="name">普通会员</div>
              <div class="discount">可享受商品折扣: 9.9折<span class="iconfont icon-zhekou"></span></div>
              <div class="lock">
                <span class="iconfont icon-suoding"></span>该会员等级尚未解锁
              </div>
            </div>
          </swiperSlide>
          <swiperSlide>
            <div class="card card2">
              <div class="name">青铜会员</div>
              <div class="discount">可享受商品折扣: 9.9折<span class="iconfont icon-zhekou"></span></div>
              <div class="lock">
                <span class="iconfont icon-suoding"></span>该会员等级尚未解锁
              </div>
            </div>
          </swiperSlide>
          <swiperSlide>
            <div class="card card3">
              <div class="name">白银会员</div>
              <div class="discount">可享受商品折扣: 9.9折<span class="iconfont icon-zhekou"></span></div>
              <div class="lock">
                <span class="iconfont icon-suoding"></span>该会员等级尚未解锁
              </div>
            </div>
          </swiperSlide>
          <swiperSlide>
            <div class="card card4">
              <div class="name">黄金会员</div>
              <div class="discount">可享受商品折扣: 9.9折<span class="iconfont icon-zhekou"></span></div>
              <div class="lock">
                <span class="iconfont icon-suoding"></span>该会员等级尚未解锁
              </div>
            </div>
          </swiperSlide>
          <swiperSlide>
            <div class="card card5">
              <div class="name">钻石会员</div>
              <div class="discount">可享受商品折扣: 9.9折<span class="iconfont icon-zhekou"></span></div>
              <div class="lock">
                <span class="iconfont icon-suoding"></span>该会员等级尚未解锁
              </div>
            </div>
          </swiperSlide>
        </swiper>
        <div class="swiper-pagination" id="pagination"></div>
      </div>
      <div class="wrapper">
        <div class="title acea-row row-between-wrapper">
          <div><span class="iconfont icon-icon_huangguan"></span>会员升级要求</div>
          <div class="num"><span class="current">0</span>/1</div>
        </div>
        <div class="list">
          <div class="item">
            <div class="top acea-row row-between-wrapper">
              <div class="name">满足购买门票包498元</div>
              <div>未满足条件</div></div>
            <div class="cu-progress">
              <van-progress inactive :percentage="0" />
            </div>
            <div class="experience acea-row row-between-wrapper">
              <div>还需要498元</div><div><span class="num">0</span>/498</div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn">
        <router-link tag="div" class="item" to="/home">
          <span>购买门票包</span>
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    // let _this = this
    return {
      // a: 2,
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: !0,
        watchSlidesProgress: !0,
        paginationClickable: !0,
        on: {
          slideChangeTransitionEnd: function () {
            // alert(_this.a)
          }
        }
        // onProgress: function (a) {
        //   var b, c, d
        //   for (b = 0; b < a.slides.length; b++) c = a.slides[b], d = c.progress, scale = 1 - Math.min(Math.abs(0.2 * d), 1), es = c.style, es.opacity = 1 - Math.min(Math.abs(d / 2), 1), es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0px,0,' + -Math.abs(150 * d) + 'px)'
        // },
        // onSetTransition: function (a, b) {
        //   for (var c = 0; c < a.slides.length; c++) es = a.slides[c].style, es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = b + 'ms'
        // }
      }
    }
  },
  computed: {
  },
  mounted () {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .member
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    background: #f5f5f5;
    &.slide-enter-active, &.slide-leave-active
      transition: all .3s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
    .header
      background-color #232323
      width 100%
      padding .5rem 0
      .swiper-container
        .swiper-wrapper
          .swiper-slide
            width 90%
            .card
              width 95%
              height 3.4rem
              margin 0 auto
              border-radius .16rem
              color #fff
              .name
                font-size .46rem
                font-weight 700
                padding .33rem 0 0 .35rem
              .discount
                font-size .28rem
                font-weight 700
                margin .02rem 0 0 .35rem
              .lock
                font-size .26rem
                margin .73rem 0 0 .35rem
                .iconfont
                  font-size .33rem
                  margin-right .15rem
                  vertical-align -.04rem
            .card1
              background: url('./icon01.jpg')no-repeat
              background-size 100% 100%
            .card2
              background: url('./icon02.jpg')no-repeat
              background-size 100% 100%
            .card3
              background: url('./icon03.jpg')no-repeat
              background-size 100% 100%
            .card4
              background: url('./icon04.jpg')no-repeat
              background-size 100% 100%
            .card5
              background: url('./icon05.jpg')no-repeat
              background-size 100% 100%
    .wrapper
      background-color #fff
      padding-bottom .16rem
      margin-bottom .2rem
      font-size .28rem
      .title
        height .98rem
        padding 0 .3rem
        font-size .3rem
        font-weight 700
        color #282828
        .num
          .current
            color #ffad07
        .iconfont
          color #ffae06
          font-weight 400
          font-size .4rem
          margin-right .12rem
          vertical-align -.02rem
      .list
        .item
          height 1.84rem
          background-color #f9f9f9
          margin 0 .3rem .2rem
          padding .27rem 0 .22rem 0
          border-radius .12rem
          .top
            padding-right .27rem
            font-size .26rem
            color #999
            .name
              border-left .06rem solid #ffae06
              padding-left .2rem
              font-size .28rem
              color #282828
              font-weight 700
          .cu-progress
            overflow hidden
            height .12rem
            background-color #eee
            width 6.36rem
            border-radius .2rem
            margin .35rem auto 0 auto
          .experience
            margin-top .17rem
            padding 0 .27rem
            font-size .24rem
            color #999
            .num
              color #ffad07
    .btn
      background #fff
      padding .3rem 0
      margin-top .5rem
      font-size .36rem
      text-align center
      .item
        font-size .26rem
        color #282828
        width 2rem
        height .52rem
        border 1px solid #ddd
        border-radius .26rem
        line-height .5rem
        margin 0 auto
        background #ddd
        color #fff
        text-decoration underline
</style>
