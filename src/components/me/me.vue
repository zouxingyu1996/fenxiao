<template>
  <div class="me">
    <div class="top">
      <div class="set"><span class="iconfont icon-shezhi2"></span></div>
      <div class="user">
        <div class="fl">
          <img src="./user.png">
        </div>
        <div class="fr">
          <div class="name">狐离</div>
          <div class="reco">顶级分销商</div>
        </div>
      </div>
      <div class="asset">
        <div class="can">
          <span>1000.00</span>
          <div>可用余额（元）</div>
        </div>
        <div class="reveal">
          <div class="grand">
            <span>1000.00</span>
            <div>累计收益（元）</div>
          </div>
          <div class="team">
            <span>100</span>
            <div>团队（人）</div>
          </div>
          <div class="integral">
            <span>1000</span>
            <div>积分</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="fl">
          <img src="./icon01.png">
          <div>充值</div>
        </div>
        <div class="fr">
          <img src="./icon02.png">
          <div>提现</div>
        </div>
      </div>
    </div>
    <div class="cen">
      <router-link tag="div" class="item" to="/promotion">
        <img src="./icon03.png">推广佣金
      </router-link>
      <router-link tag="div" class="item" to="/share">
        <img src="./icon04.png">兑换订单
      </router-link>
      <router-link tag="div" class="item" to="/member">
        <img src="./icon06.png">会员中心
      </router-link>
      <router-link tag="div" class="item" to="/share">
        <img src="./icon05.png">我的团队
      </router-link>
    </div>
    <div class="list">
      <router-link tag="div" class="item" to="/share">
        <img class="fl" src="./icon07.png">
        <span>我的二维码</span>
        <img class="fr" src="./icon08.png">
      </router-link>
      <router-link tag="div" class="item" to="/share">
        <img class="fl" src="./icon09.png">
        <span>提现记录</span>
        <img class="fr" src="./icon08.png">
      </router-link>
      <router-link tag="div" class="item" to="/share">
        <img class="fl" src="./icon10.png">
        <span>地址管理</span>
        <img class="fr" src="./icon08.png">
      </router-link>
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
  .me
    width 100%
    padding-bottom 1.3rem
    .top
      height 5rem
      position relative
      font-size $font-size-medium
      padding 0 .5rem
      background url("./bg.jpg")no-repeat
      background-size 100% 100%
      color $color-text-d
      .set
        position absolute
        right .5rem
        top .5rem
        span
          font-size .4rem
      .user
        height 1.8rem
        display flex
        align-items center
        .fl
          img
            border-radius 50%
            width 1.2rem
            height 1.2rem
        .fr
          margin-left .3rem
          .reco
            margin-top .2rem
            font-size $font-size-small
      .asset
        .can
          letter-spacing 2px
          span
            font-size .5rem
            display inline-block
            margin-bottom .2rem
          div
            font-size $font-size-small
        .reveal
          margin-top .3rem
          font-size $font-size-small
          letter-spacing 2px
          span
            font-size $font-size-medium-x
            display inline-block
            margin-bottom .2rem
          .grand
            width 40%
            float left
          .integral
            width 30%
            float left
          .team
            width 30%
            float left
      .box
        position absolute
        background $color-text-d
        height 2rem
        width calc(100% - 1rem)
        border-radius .3rem
        bottom -1.2rem
        box-shadow 0 0 .3rem #fb8924
        >div
          float left
          width 50%
          display flex
          align-items center
          justify-content center
          flex-flow column
          height 2rem
          color $color-text
          img
            width 1rem
            height .7rem
            margin-bottom .2rem
    .cen
      background $color-background-d
      padding 1.5rem 0 .3rem 0
      overflow hidden
      font-size $font-size-medium
      .item
        &:nth-child(1),&:nth-child(2)
          border-bottom 1px solid #eee
        &:nth-child(2n)
          width calc(50% - 1px) !important
          border-left 1px solid #eee
        float left
        width 50%
        text-align center
        padding .3rem 0
        img
          display block
          width .6rem
          height .6rem
          margin 0 auto .3rem
    .list
      margin-top .3rem
      background $color-background-d
      font-size $font-size-medium
      .item
        padding .2rem .3rem
        display flex
        align-items center
        position relative
        border-bottom 1px solid #eee
        .fl
          width .4rem
          height .4rem
          margin-right .2rem
        .fr
          width .15rem
          height .25rem
          position absolute
          right .3rem
</style>
