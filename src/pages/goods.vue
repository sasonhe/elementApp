<template>
<div class="godds">
  <div class="menu-wrapper">

  </div>
  <div class="foods-wrapper">

  </div>
</div>
</template>

<script>
export default {
  name: 'goods',
  data() {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
/* @import '../assets/common/stylus/style.styl' */
.godds
  display:flex
  position:absolute
  top: 174px
  bottom: 46px
  width: 100%
  overflow: hidden
  .menu-wrapper
    flex: 0 0 80px
    width: 80px
    background: #f3f5f7
  .foods-wrapper
    flex: 1


</style>
