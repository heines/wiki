export const state = () => ({
  data: null
});

export const mutations = {
  setBlogData(state, data) {
    state.data = data;
  }
};
