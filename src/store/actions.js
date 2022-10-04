const rootActions = {
  login(context) {
    context.commit('authUser', { isAuth: true });
  },
  logout(context) {
    context.commit('authUser', { isAuth: false });
  },
};

export default rootActions;
