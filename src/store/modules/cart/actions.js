const cartActions = {
  addToCart(context, payload) {
    const prodId = payload.id;
    const products = context.rootGetters['product/showProducts'];
    const product = products.find((prod) => prod.id === prodId);
    context.commit('addProductToCart', product);
  },
  removeFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  },
};

export default cartActions;
