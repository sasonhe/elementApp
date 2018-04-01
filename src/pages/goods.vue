<template>
<div class="goods">
  <div class="menu-wrapper">
    <ul>
      <li v-for="(item,index) in goods" class="menu-item">
        <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
        </span>
      </li>
    </ul>
  </div>
  <div class="foods-wrapper">
    <ul>
      <li v-for="item in goods" class="foods-list">
        <h1 class="title">{{item.name}}</h1>
        <ul>
          <li v-for="food in item.foods" class="food-iten border-1px">
            <div class="icon">
              <img :src="food.icon" alt="">
            </div>
            <div class="content">
              <h2 class="name">{{food.name}}</h2>
              <p class="desc">{{food.description}}</p>
              <div class="extra">
                <span>月售{{food.sellCount}}</span>
                <span>好评率{{food.rating}}%</span>
              </div>
              <div class="price">
                <span>￥{{food.price}}</span>
                <span v-show="food.oldPrice">￥{{food.oldPrice}}</span>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'goods',
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: []
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    this.$http.get("../static/selldata.json").then(response => {
      this.goods = response.data.goods;
      // console.log(this.goods);
    }, response => {
      console.log("加载失败");
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../assets/css/index.styl';
.goods
  display: flex
  position: absolute
  top: 174px
  bottom: 46px
  width: 100%
  overflow: hidden
  .menu-wrapper
    flex: 0 0 80px
    width: 80px
    background: #f3f5f7
    .menu-item
      display: table
      height: 54px
      width: 56px
      padding: 0 12px
      line-height: 14px
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
      .text
        display: table-cell
        width: 56px
        vertical-align: middle
        border-1px(rgba(7, 17, 27, 0.1))
        font-size: 12px
  .foods-wrapper
    flex: 1
    .title
      padding-left: 14px
      height: 26px
      line-height: 26px
      border-left: 2px solid #d9dde1
      font-size: 12px
      color: rgb(147,153,159)
      background: #f3f5f7
    .food-iten
      display: flex
      margin: 18px
      border-1px(rgba(7, 17, 27, 0.1))
</style>
