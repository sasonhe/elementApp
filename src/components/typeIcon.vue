<template>
<span class="icon" :class="classMap[icon]"></span>
</template>

<script>
export default {
  props: {
    icon: {
      type: null
    }
  },
  data() {
    return {}
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"]
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../assets/css/index.styl';

.content-wrapper
  .supports
    .icon
      display: inline-block
      width: 16px
      height: 16px
      vertical-align: top
      margin-right: 6px
      background-size: 16px 16px
      background-repeat: no-repeat
      &.decrease
          bg-image('../../static/images/decrease_2')
        &.discount
          bg-image('../../static/images/discount_2')
        &.guarantee
          bg-image('../../static/images/guarantee_2')
        &.invoice
          bg-image('../../static/images/invoice_2')
        &.special
          bg-image('../../static/images/special_2')
.detail-wrapper
  .supports
    .icon
      display: inline-block
      vertical-align: top
      width: 12px
      height: 12px
      margin-right: 4px
      background-size: 12px 12px
      background-repeat: no-repeat
      &.decrease
          bg-image('../../static/images/decrease_1')
        &.discount
          bg-image('../../static/images/discount_1')
        &.guarantee
          bg-image('../../static/images/guarantee_1')
        &.invoice
          bg-image('../../static/images/invoice_1')
        &.special
          bg-image('../../static/images/special_1')
.menu-wrapper
  .icon
    display: inline-block
    vertical-align: top
    width: 12px
    height: 12px
    margin-right: 2px
    background-size: 12px 12px
    background-repeat: no-repeat
    &.decrease
      bg-image('../../static/images/decrease_3')
    &.discount
      bg-image('../../static/images/discount_3')
    &.guarantee
      bg-image('../../static/images/guarantee_3')
    &.invoice
      bg-image('../../static/images/invoice_3')
    &.special
      bg-image('../../static/images/special_3')
</style>
