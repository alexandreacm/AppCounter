import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  counter: 0,
  counterTotal: 0,
  selectId: 0
};

const counterSlice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    addCounter: (state, action) => {
      let id = (state.counter += 1);

      const newCounter = {
        id,
        name: `Counter ${id}`,
        total: `000${id}`,
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

      state.list.forEach(item => (item.selected = false));
      state.list[index].selected = true;
    }
  }
});

export const { addCounter, removeCounter, selectCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
