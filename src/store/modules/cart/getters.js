const cartGetters = {
  cartItems(state) {
    return state.items;
  },
  cartSum(state) {
    return state.total;
  },
  cartQty(state) {
    return state.qty;
  },
};

export default cartGetters;
