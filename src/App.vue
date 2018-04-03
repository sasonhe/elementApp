<template>
<div id="app">
  <Header :seller="seller"></Header>
  <nav class="tab border-1px">
    <router-link to="/" exact class="tab-item">商品</router-link>
    <router-link to="/Ratings" exact class="tab-item">评论</router-link>
    <router-link to="/seller" exact class="tab-item">商家</router-link>
  </nav>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  created() {

    this.$http.get("../static/selldata.json").then(response => {
      this.seller = response.data.seller;
    }, response => {
      console.log("加载失败");
    })
  },
  components: {
    Header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./assets/css/index.styl"
#app
  .tab
    display:flex
    width:100%
    height:40px
    line-height:40px
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex:1
      text-align:center
      font-size: 18px
      display: block
      color: #333
      text-decoration: none
      line-height: 40px
      &.router-link-active
        color: red
        border-1px(rgba(255, 0, 31, 1))
</style>
