const state = () => ({
  user: null,
  alertMessage: "",
  alert: false,
  alertType: ""
});

const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      state.commit("SET_USER", null);
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
  },
  setAlert({ commit }, payload) {
    commit("SET_ALERT", payload);
  },
  resetAlert({ commit }) {
    commit("RESET_ALERT");
  }
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_ALERT(state, payload) {
    state.alert = true;
    state.alertMessage = payload.message;
    state.alertType = payload.type;
  },
  RESET_ALERT(state) {
    state.alert = false;
    state.alertMessage = "";
    state.alertType = "";
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
