<template>
    <div class="home">
      <div class="header file-row">
        <span class="iconfont icon-caidan fl" @click=""></span>
        <span class="text">中安云城</span>
        <span class="iconfont icon-gouwuche1 fr" @click=""></span>
      </div>
      <div class="ban">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="nav">
        <div class="item">
          <img src="//19579903.s61i.faiusr.com/4/AD0I-4erCRAEGAAgwY6e5wUovLm-oQYw1wE4mAI!640x640.png.webp">
          <div class="text file-row">
            <div class="bt">赞助包</div>
            <div>Sponsor</div>
          </div>
        </div>
        <div class="item">
          <img src="//19579903.s61i.faiusr.com/4/AD0I-4erCRAEGAAgwY6e5wUo3LWm_wIw1wE4mAI!640x640.png.webp">
          <div class="text file-row">
            <div class="bt">积分</div>
            <div>Integral</div>
          </div>
        </div>
        <div class="item">
          <img src="//9144948.s21i.faiusr.com/2/1/ABUIABACGAAgmLjh8wUo0vTy6gIw1wE4mAI!640x640.jpg.webp">
          <div class="text file-row">
            <div class="bt">我的</div>
            <div>Me</div>
          </div>
        </div>
      </div>
      <div class="recommend">
        <div class="fl">
          <div class="top file-row">
            <div class="bt">至尊赞助包</div>
            <div class="tips">超值优惠 至尊享受</div>
          </div>
          <div class="img">
            <img src="//9144948.s21i.faiusr.com/2/1/ABUIABACGAAgkunb8wUooMW0wAIw-gE45wE!640x640.jpg.webp">
          </div>
        </div>
        <div class="fr">
          <div class="top file-row">
            <div class="text">
              <div class="bt">花色生香</div>
              <div class="tips">浮生惬意</div>
            </div>
            <div class="img">
              <img src="//19579903.s61i.faiusr.com/4/AD0I-4erCRAEGAAgzJWe5wUog5agwAIwwwE4jwE!640x640.png.webp">
            </div>
          </div>
          <div class="bottom file-row">
            <div class="img">
              <img src="//19579903.s61i.faiusr.com/4/AD0I-4erCRAEGAAgy5We5wUo6eXhdjC9ATiOAQ!640x640.png.webp">
            </div>
            <div class="text">
              <div class="bt">净化心绪</div>
              <div class="tips">缓解压力</div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommend1">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <tab></tab>
    </div>
</template>

<script type="text/ecmascript-6">
import Tab from 'components/tab/tab'
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
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .home
    padding-bottom 1.3rem
    .header
      height 1rem
      width 100%
      line-height 1rem
      border-bottom 1px solid #eee
      position fixed
      background #fff
      top 0
      z-index 99
      .iconfont
        position absolute
        font-size 0.45rem
        width 1rem
        text-align center
      .fl
        left 0
      .fr
        right 0
      .text
        font-size .36rem
    .ban
      width 100%
      height 3.75rem
      margin-top 1rem
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
      margin-top .3rem
      overflow hidden
      padding .2rem
      .item
        position relative
        float left
        width calc(33.3333% - .13rem)
        height 3rem
        &:nth-child(1)
          margin-right .13rem
        &:nth-child(2)
          margin-left .065rem
          margin-right .065rem
        &:nth-child(3)
          margin-left .13rem
        img
          width 100%
          height 100%
        .text
          position absolute
          width 100%
          height 3rem
          top 0
          left 0
          color #fff
          flex-flow column
          font-size .28rem
          .bt
            margin-bottom .2rem
            font-size .38rem
    .recommend
      padding .3rem
      overflow hidden
      .fl
        width 40%
        float left
        padding-right .3rem
        border-right 1px solid #d0d0d0
        box-sizing border-box
        .top
          text-align center
          height 1.5rem
          flex-flow column
          .bt
            font-size .38rem
          .tips
            font-size .28rem
            margin-top .1rem
            color #666
        .img
          height 2.5rem
          img
            width 100%
            height 100%
      .fr
        width 60%
        float left
        padding-left .3rem
        box-sizing border-box
        .top
          height 2rem
          overflow hidden
          border-bottom 1px solid #d0d0d0
          .text
            width 50%
            float left
            .bt
              font-size .38rem
              margin-bottom .1rem
            .tips
              font-size .28rem
              color #666
          .img
            width 50%
            float left
            height 1.5rem
            img
              width 100%
              height 100%
        .bottom
          height 2rem
          .text
            width 50%
            float left
            margin-left .2rem
            .bt
              font-size .38rem
              margin-bottom .1rem
            .tips
              font-size .28rem
              color #666
          .img
            width 50%
            float left
            height 1.5rem
            img
              width 100%
              height 100%
</style>
