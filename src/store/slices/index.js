import { combineReducers } from '@reduxjs/toolkit';

import counters, { counterState } from './counterSlice';

export const globalState = {
  counters: counterState
};

export default combineReducers({ counters });
