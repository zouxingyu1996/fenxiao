<template>
  <transition name="slide">
    <div class="cash">
      <van-tabs @click="onClick">
        <van-tab title="银行卡">
          <div class="lits">
            <div class="item acea-row row-between-wrapper">
              <div class="name">持卡人</div>
              <div class="input">
                <input placeholder="请输入持卡人姓名">
              </div>
            </div>
            <div class="item acea-row row-between-wrapper">
              <div class="name">卡号</div>
              <div class="input">
                <input placeholder="请填写卡号">
              </div>
            </div>
            <div class="item acea-row row-between-wrapper">
              <div class="name">银行</div>
              <div class="input">
                <van-field
                  readonly
                  clickable
                  label=""
                  :value="value"
                  placeholder="选择银行"
                  @click="showPicker = true"
                />
                <van-popup v-model="showPicker" position="bottom">
                  <van-picker
                    show-toolbar
                    :columns="columns"
                    @cancel="showPicker = false"
                    @confirm="onConfirm"
                  />
                </van-popup>
              </div>
            </div>
            <div class="item acea-row row-between-wrapper">
              <div class="name">金额</div>
              <div class="input">
                <input placeholder="单次提现最低金额100">
              </div>
            </div>
            <div class="tip">当前可提现金额: 0.00</div>
            <div class="btn" @click="submit">提现</div>
          </div>
        </van-tab>
        <van-tab title="微信">
          <div class="lits">
            <div class="item acea-row row-between-wrapper">
              <div class="name">微信号</div>
              <div class="input">
                <input placeholder="请填写微信号">
              </div>
            </div>
            <div class="item acea-row row-between-wrapper">
              <div class="name">金额</div>
              <div class="input">
                <input placeholder="单次提现最低金额100">
              </div>
            </div>
            <div class="tip">当前可提现金额: 0.00</div>
            <div class="btn" @click="submit">提现</div>
          </div>
        </van-tab>
        <van-tab title="支付宝">
          <div class="lits">
            <div class="item acea-row row-between-wrapper">
              <div class="name">账号</div>
              <div class="input">
                <input placeholder="请填写支付宝账号">
              </div>
            </div>
            <div class="item acea-row row-between-wrapper">
              <div class="name">金额</div>
              <div class="input">
                <input placeholder="单次提现最低金额100">
              </div>
            </div>
            <div class="tip">当前可提现金额: 0.00</div>
            <div class="btn" @click="submit">提现</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
export default {
  data () {
    return {
      value: '',
      showPicker: false,
      columns: ['中国银行', '招商银行', '交通银行', '邮政银行', '农业银行']
    }
  },
  methods: {
    onClick (name, title) {
      Toast(title)
    },
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    },
    submit () {
      Toast('暂无可提现金额')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .cash
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
    .lits
      padding .3rem
      .item
        border-bottom 1px solid #eee
        height 1rem
        font-size .3rem
        .name
          width 1.3rem
        .input
          width calc(100% - 1.3rem)
          .van-cell
            background none
          input
            width 100%
            height 100%
            box-sizing border-box
            padding .2rem
            height 1rem
            outline none
            border 0
            -webkit-appearance none
            border-radius 0
            background none
      .tip
        font-size .26rem
        color #999
        margin-top .25rem
      .btn
        color #fff
        height .9rem
        text-align center
        border-radius .5rem
        line-height .9rem
        margin .64rem .3rem
        background-color #fc8535
</style>
