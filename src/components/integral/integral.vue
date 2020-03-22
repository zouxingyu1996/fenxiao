<template>
    <div class="integral">
      <div class="header">
        <span class="text">积分兑换</span>
      </div>
      <div class="box">
        <div class="item">
          <div class="img"><img src="http://www.ytstea.com/uploads/allimg/170521/1-1F521144104B2.jpg"></div>
          <div class="tips">
            <div class="bt">云上黑茶</div>
            <div class="price"><span>99</span>积分</div>
            <div class="num">已兑99件</div>
          </div>
        </div>
        <div class="item">
          <div class="img"><img src="http://www.ytstea.com/uploads/allimg/170521/1-1F521144104B2.jpg"></div>
          <div class="tips">
            <div class="bt">云上黑茶</div>
            <div class="price"><span>99</span>积分</div>
            <div class="num">已兑99件</div>
          </div>
        </div>
        <div class="item">
          <div class="img"><img src="http://www.ytstea.com/uploads/allimg/170521/1-1F521144104B2.jpg"></div>
          <div class="tips">
            <div class="bt">云上黑茶</div>
            <div class="price"><span>99</span>积分</div>
            <div class="num">已兑99件</div>
          </div>
        </div>
        <div class="item">
          <div class="img"><img src="http://www.ytstea.com/uploads/allimg/170521/1-1F521144104B2.jpg"></div>
          <div class="tips">
            <div class="bt">云上黑茶</div>
            <div class="price"><span>99</span>积分</div>
            <div class="num">已兑99件</div>
          </div>
        </div>
        <div class="item">
          <div class="img"><img src="http://www.ytstea.com/uploads/allimg/170521/1-1F521144104B2.jpg"></div>
          <div class="tips">
            <div class="bt">云上黑茶</div>
            <div class="price"><span>99</span>积分</div>
            <div class="num">已兑99件</div>
          </div>
        </div>
        <div class="item">
          <div class="img"><img src="http://www.ytstea.com/uploads/allimg/170521/1-1F521144104B2.jpg"></div>
          <div class="tips">
            <div class="bt">云上黑茶</div>
            <div class="price"><span>99</span>积分</div>
            <div class="num">已兑99件</div>
          </div>
        </div>
        <div class="item">
          <div class="img"><img src="http://www.ytstea.com/uploads/allimg/170521/1-1F521144104B2.jpg"></div>
          <div class="tips">
            <div class="bt">云上黑茶</div>
            <div class="price"><span>99</span>积分</div>
            <div class="num">已兑99件</div>
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
  .integral
    .header
      height 1rem
      width 100%
      line-height 1rem
      display flex
      align-items center
      justify-content center
      position fixed
      border-bottom 1px solid #eee
      background #fff
      .text
        font-size $font-size-large
        font-weight 700
    .box
      padding 1.3rem .3rem
      overflow hidden
      .item
        background #fff
        width calc(50% - .15rem)
        float left
        border-radius .15rem
        box-sizing border-box
        overflow hidden
        margin-bottom .3rem
        &:nth-child(2n)
          margin-left .15rem
        &:nth-child(2n - 1)
          margin-right .15rem
        .img
          width 100%
          height 3.45rem
          img
            width 100%
            height 100%
        .tips
          padding .2rem
          .price
            font-size .26rem
            color #fc4141
            font-weight 700
            margin .2rem 0
            span
              font-size .34rem
              font-weight 700
          .num
            font-size .22rem
            color #aaa
</style>
