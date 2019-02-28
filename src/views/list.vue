<template>
  <div v-show="list.length">
    <Product
      v-for="item in filteredAndOrderedList"
      :info="item"
      :key="item.id"></Product>
  </div>
</template>

<script>
  // 导入商品简介组件
  import Product from '../components/product'

  export default {
    name: "list",
    data() {
      return {
        // 排序条件，可选值：
        // sales 销量
        // cost-desc 价格降序
        // cost-asc 价格升序
        order: ''
      }
    },
    components: {Product},
    computed: {
      list() {
        // 从vuex中获取的数据
        return this.$store.state.productList;
      },
      filteredAndOrderedList() {
        // 筛选和排序功能
        // 赋值原始数据
        let list = this.list;
        // todo 按品牌过滤
        // todo 按颜色过滤
        // 排序
        if (this.order !== '') {
          if (this.order === 'sales') {
            list = list.sort((a, b) => b.sales - a.sales);
          } else if (this.order === 'cost-desc') {
            list = list.sort((a, b) => b.cost - a.cost);
          } else if (this.order === 'cost-asc') {
            list = list.sort((a, b) => a.cost - b.cost);
          }
        }
        return list;
      }
    },
    mounted() {
      // 初始化时，通过Vuex的action请求数据
      this.$store.dispatch('getProductList');
    }
  }
</script>

<style scoped>
  .product-not-found {
    text-align: center;
    padding: 32px;
  }
</style>
