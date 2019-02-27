<template>
  <div class="product">
    <router-link :to="'/product/'+info.id" class="product-main">
      <img :src="info.image">
      <h4>{{info.name}}</h4>
      <div class="product-color" :style="{background: colors[info.color]}"></div>
      <div class="product-cost">￥{{info.cost}}</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "product",
    props: {
      info: Object
    },
    data: function () {
      return {
        colors: {
          '白色': '#ffffff',
          '金色': '#dac272',
          '蓝色': '#233472',
          '红色': '#f2352e'
        }
      }
    }
  }
</script>

<style scoped>
  .product {
    width: 25%;
    float: left;
  }

  .product-main {
    display: block;
    margin: 16px;
    padding: 16px;
    border: 1px solid #dddee1;
    /*向 div 元素添加圆角边框*/
    border-radius: 6px;
    overflow: hidden;
    background: #fff;
    text-align: center;
    position: relative;
  }

  product img {
    width: 100%;
  }

  h4 {
    color: #222;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
