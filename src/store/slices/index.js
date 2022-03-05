//import { combineReducers } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import counters from './counterSlice';

export default combineReducers({ counters });
