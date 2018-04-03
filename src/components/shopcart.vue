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
      <div class="price">

      </div>
      <div class="desc">

      </div>
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
  data() {
    return {}
  },
  created() {},
  methods: {}
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
  background: #ccc
  .content
    display:flex
    font-size: 0
    background: #141d27
    .content-left
      flex: 1
      .logo-wrapper
        display: inline-block
      .price
        display: inline-block
      .desc
        display: inline-block
    .content-right
      flex: 0 0 105px
      width: 105px
</style>
