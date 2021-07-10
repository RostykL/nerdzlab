export const toggle = key => (state, action) => {
  state[key] = !state[key];
};
