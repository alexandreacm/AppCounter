const INITIAL_STATE = {
  counters: [
    {
      totalCounter: 0
    }
  ],
  counter: 0
};

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COUNTER':
      return {
        ...state,
        counters: [...state.counters, { totalCounter: state.counter }],
        counter: state.counter + 1
      };
    default:
      state;
  }
}
