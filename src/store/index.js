import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/slices/counterSlice';

export default configureStore({
  reducer: { counters: counterReducer }
});
