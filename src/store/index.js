import { configureStore } from '@reduxjs/toolkit';
import reducers from '@/store/slices';

export default configureStore({
  reducer: reducers
});
