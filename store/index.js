const state = () => ({
  user: null
});

const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      // remove state
      state.commit("SET_USER", null);
      //redirect from here
      this.$router.push({
        path: "/"
      });
    } else {
      const { uid, email, emailVerified, displayName, photoURL } = authUser;
      state.commit("SET_USER", {
        uid,
        email,
        emailVerified,
        displayName,
        photoURL
      });
    }
  }
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  }
};

const getters = {
  getUser(state) {
    return state.user;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
