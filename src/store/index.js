import { createStore } from 'vuex';
import rootActions from './actions';
import rootGetters from './getters';
import cartModule from './modules/cart';
import productModule from './modules/products';
import rootMutations from './mutations';

const store = createStore({
  modules: {
    cart: cartModule,
    product: productModule,
  },
  state() {
    return {
      isLogin: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
