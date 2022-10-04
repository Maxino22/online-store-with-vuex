const rootMutations = {
  authUser(state, payload) {
    state.isLogin = payload.isAuth;
  },
};

export default rootMutations;
