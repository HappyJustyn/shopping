import Vue from "vue";
import Vuex from "vuex";
// 导入模拟数据
import product_data from '../product';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 商品列表
    productList: [],
    // 购物车数据
    cartList: []
  },
  getters: {},
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
