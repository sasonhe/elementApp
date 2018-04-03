<template>
<div class="shopcart">
  <div class="content">
    <div class="content-left">
      <div class="logo-wrapper">
        <div class="logo">
          <span class="icon-shopping_cart"></span>
        </div>
        <div class="num">

        </div>
      </div>
      <div class="price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}</div>
      <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
    </div>
    <div class="content-right">
      <div class="pay">

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'shopcart',
  props: {
    selectFoods: {
      type: Array,
      default () {
        return [{
          price: 10,
          count: 1
        }];
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach((food) => {
        total += food.price * food.count;
      });
      return total;
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopcart
  position:fixed
  left: 0
  bottom: 0
  z-index: 50
  width: 100%
  height: 48px
  .content
    display:flex
    font-size: 0
    color: rgba(255, 255, 255, 0.4)
    background: #141d27
    .content-left
      flex: 1
      .logo-wrapper
        display: inline-block
        position: relative
        top: -10px
        margin: 0 12px
        padding: 6px
        width: 56px
        height: 56px
        box-sizing: border-box
        vertical-align: top
        border-radius: 50%
        background: #141d27
        .logo
          width: 100%
          height: 100%
          text-align: center
          border-radius: 50%
          background: #2b343c
          .icon-shopping_cart
            font-size: 24px
            color: #80858a
            line-height: 48px
      .price
        display: inline-block
        vertical-align: top
        margin-top: 12px
        padding-right: 12px
        box-sizing: border-box
        font-size:16px
        font-weight: 700
        line-height: 24px
        border-right:1px solid rgba(255, 255, 255, 0.1)
        &.highlight
          color: #fff
      .desc
        display: inline-block
        vertical-align: top
        margin: 12px 0 0 12px
        line-height: 24px
        font-size: 10px
    .content-right
      flex: 0 0 105px
      width: 105px
</style>
