import { configureStore } from '@reduxjs/toolkit';
import oompaListReducer from '../components/OompaList/oompaListSlice';
import oompaDetailReducer from '../components/OompaDetail/oompaDetailSlice';

export const store = configureStore({
  reducer: { oompaList: oompaListReducer, oompaDetail: oompaDetailReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
