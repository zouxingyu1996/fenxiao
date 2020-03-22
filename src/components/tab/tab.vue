<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/home">
      <div class="icon1"></div>
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/integral">
      <div class="icon2"></div>
      <span class="tab-link">积分</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/find">
      <div class="icon3"></div>
      <span class="tab-link">发现</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/me">
      <div class="icon4"></div>
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display: flex
    height: 1rem
    font-size: $font-size-medium
    position: fixed
    bottom: 0
    width: 100%
    background: $color-background-d
    border-top 1px solid #eee
    .tab-item
      flex: 1
      text-align: center
      display flex
      align-items center
      justify-content center
      flex-flow column
      .icon1
        width .4rem
        height .4rem
        background url("./icon01.png")no-repeat
        background-size 100% 100%
        margin-bottom .1rem
      .icon2
        width .4rem
        height .4rem
        background url("./icon02.png")no-repeat
        background-size 100% 100%
        margin-bottom .1rem
      .icon3
        width .4rem
        height .4rem
        background url("./icon03.png")no-repeat
        background-size 100% 100%
        margin-bottom .1rem
      .icon4
        width .4rem
        height .4rem
        background url("./icon04.png")no-repeat
        background-size 100% 100%
        margin-bottom .1rem
      .tab-link
        font-size .2rem
        color: $color-text
      &.router-link-active
        .tab-link
          color: $color-theme
          //border-bottom: 2px solid $color-theme
        .icon1
          background url("./icon01_hover.png")no-repeat
          background-size 100% 100%
        .icon2
          background url("./icon02_hover.png")no-repeat
          background-size 100% 100%
        .icon3
          background url("./icon03_hover.png")no-repeat
          background-size 100% 100%
        .icon4
          background url("./icon04_hover.png")no-repeat
          background-size 100% 100%
</style>
