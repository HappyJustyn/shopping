import Vue from "vue";
import Vuex from "vuex";
// 导入模拟数据
import product_data from '../product';

Vue.use(Vuex);

/**
 * 数组去重
 * @param array
 */
function getFilterArray(array) {
  let res = [];
  let obj = {};
  for (let i = 1; i < array.length; i++) {
    item = array[i];
    if (!obj[item]) {
      res.push(item);
      obj[item] = 1;
    }
  }
  return res;
}

const store = new Vuex.Store({
  state: {
    // 商品列表
    productList: [],
    // 购物车数据
    cartList: []
  },
  getters: {
    // 取得品牌数据
    brands: state => {
      const brands = state.productList.map(item => item.brand);
      return getFilterArray(brands);
    },
    // 取得颜色数据
  },
  mutations: {
    // 添加商品列表
    setProductList(state, data) {
      state.productList = data;
    }
  },
  actions: {
    // 请求列表数据
    getProductList(context) {
      // 模拟ajax请求后台数据
      setTimeout(() => {
        context.commit('setProductList', product_data);
      }, 1000);
    }
  }
});

export default store;
