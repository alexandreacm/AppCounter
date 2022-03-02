import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  counter: 0,
  counterTotal: 0,
  selectId: 0
};

function cleanList(state) {
  state.list.forEach(item => (item.selected = false));
}

function maskedTotal(num) {
  let placeLimit = -4;
  return ('0000' + num).slice(placeLimit);
}

const counterSlice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    addCounter: (state, action) => {
      let id = (state.counter += 1);

      const newCounter = {
        id,
        name: `Counter ${id}`,
        total: 0,
        selected: false
      };

      state.list.push(newCounter);
      state.list[0].selected = true;
    },
    removeCounter: (state, action) => {
      if (!state.list.length) {
        return;
      }

      state.list[0].selected = true;
      state.list = state.list.filter(item => item.id !== state.selectId);
    },
    selectCounter: (state, action) => {
      state.selectId = action.payload.id;

      let index = state.list.findIndex(
        counter => counter.id === action.payload.id
      );

      cleanList(state);
      state.list[index].selected = true;
    },
    increment: (state, action) => {
      const index = state.list.findIndex(
        counter => counter.id === state.selectId
      );

      let total =
        state.selectId === 0
          ? parseInt(state.list[0].total)
          : parseInt(state.list[index].total);
      let countTotal = (total += 1);

      if (state.selectId != 0) {
        state.list[index].total = maskedTotal(countTotal);
      } else {
        state.list[0].total = maskedTotal(countTotal);
      }
    },
    decrement: state => {
      const index = state.list.findIndex(
        counter => counter.id === state.selectId
      );

      let total =
        state.selectId === 0
          ? parseInt(state.list[0].total)
          : parseInt(state.list[index].total);
      let countTotal = (total -= 1);

      if (state.selectId != 0) {
        state.list[index].total = maskedTotal(countTotal);
      } else {
        state.list[0].total = maskedTotal(countTotal);
      }
    }
  }
  /*COINS_SUCCESS: (state, payload) => ({
      ...state,
      coinsData: action.coinsData,
      isLoading: false
    }),*/
});

const { actions, reducer } = counterSlice;

export const {
  addCounter,
  removeCounter,
  selectCounter,
  increment,
  decrement
} = actions;

export default reducer;
