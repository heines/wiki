export const state = () => ({
  isOpenedMenu: false
});

export const mutations = {
  toggleModalMenu(state) {
    state.isOpenedMenu = !state.isOpenedMenu;
  },
  closeModalMenu(state) {
    state.isOpenedMenu = false;
  }
};
