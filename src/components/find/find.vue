<template>
    <div class="find">
      <div class="header">
        <span class="text">发现</span>
      </div>
      <div class="box">
        <div class="new">
          <div class="new_bt">最新资讯</div>
          <div class="item">
            <div class="fl">
              <div class="bt">中安云城分销商城上线了！</div>
              <div class="tips">3月20号系统正式上线</div>
            </div>
            <div class="fr"><img src="https://17439221.s21i.faiusr.com/2/ABUIABACGAAg-ZvY3AUo_uOggQYw3gI4_gE.jpg.webp"></div>
          </div>
          <div class="item">
            <div class="fl">
              <div class="bt">中安云城分销商城上线了！</div>
              <div class="tips">3月20号系统正式上线</div>
            </div>
            <div class="fr"><img src="https://17439221.s21i.faiusr.com/2/ABUIABACGAAg-ZvY3AUo_uOggQYw3gI4_gE.jpg.webp"></div>
          </div>
          <div class="item">
            <div class="fl">
              <div class="bt">中安云城分销商城上线了！</div>
              <div class="tips">3月20号系统正式上线</div>
            </div>
            <div class="fr"><img src="https://17439221.s21i.faiusr.com/2/ABUIABACGAAg-ZvY3AUo_uOggQYw3gI4_gE.jpg.webp"></div>
          </div>
        </div>
        <div class="cen">
          <div class="cen_bt">景点攻略</div>
          <div class="hot">
            <img src="https://ytspiao.ytsshop.com/uploads/image/157276972117.jpg">
            <div class="bt">云台山红色旅游胜地——英雄公园</div>
            <div class="tips">英雄公园坐落于风景秀美的马路镇云台山上，北邻马路茶场，西靠云台山村，距离马路镇约3.5KM，占地面积60.5亩，投资400余万元，自2015年开始，历时两年，分两期完成。它主要由入园牌楼、集散广场、英烈墙、纪念碑、观景长廊及台梯组成。</div>
          </div>
          <div class="hot">
            <img src="https://ytspiao.ytsshop.com/uploads/image/157283108740.jpg">
            <div class="bt">景区独具特色的景点——好汉湾</div>
            <div class="tips">《水浒传》是我国四大名著之一，也是我国古代英雄传奇小说的代表作，成书于元末明初。它是一部经过长期民间流传，最后由作家加工、再创作的长篇章回小说。这是一个引人入胜的传奇故事，它真实地描写了北宋时期农民起义、发展和失败的全过程。鲜明生动的人物形象、炉火纯青的社会历史画卷，而这些目前已经在云台山风景区好汉湾为大家一一呈现。</div>
          </div>
        </div>
      </div>
      <tab></tab>
    </div>
</template>

<script type="text/ecmascript-6">
import Tab from 'components/tab/tab'
export default {
  components: {
    Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .find
    padding 1rem 0
    .header
      height 1rem
      width 100%
      line-height 1rem
      display flex
      align-items center
      justify-content center
      position fixed
      top 0
      border-bottom 1px solid #eee
      background #fff
      .text
        font-size $font-size-large
        font-weight 700
    .box
      background #fff
      padding .3rem 0
      .new
        padding 0 .3rem
        .new_bt
          border-left .06rem solid #ffae06
          padding-left .2rem
        .item
          border-bottom 1px solid #eee
          padding-bottom .3rem
          overflow hidden
          margin-top .3rem
          .fl
            width calc(100% - 2.5rem)
            float left
            .bt
              font-size .34rem
              margin-bottom .3rem
            .tips
              font-size .28rem
              color #666
          .fr
            width 2.5rem
            height 1.8rem
            float left
            img
              width 100%
              height 100%
      .cen
        padding .3rem .3rem 0
        .cen_bt
          border-left .06rem solid #ffae06
          padding-left .2rem
        .hot
          margin .3rem 0
          box-shadow 0 0 .1rem #dad9d9
          padding: .3rem .2rem
          img
            width 100%
            height 3rem
          .bt
            margin-top .2rem
          .tips
            margin .2rem 0
            font-size .26rem
            color #9fa4b3
            line-height 1.5
</style>
