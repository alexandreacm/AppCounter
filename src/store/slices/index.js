import { combineReducers } from '@reduxjs/toolkit';
import counters from './counterSlice';

export default combineReducers({ counters });
