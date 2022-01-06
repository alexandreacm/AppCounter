export const types = {
  ADD: 'ADD_COUNTER',
  REMOVE: 'REMOVE_COUNTER'
};

export const Creators = {
  AddCounter: () => ({
    type: types.ADD
  })
};
