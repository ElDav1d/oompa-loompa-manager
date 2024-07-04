import { configureStore } from '@reduxjs/toolkit';
import oompaListReducer from '../components/OompaList/oompaListSlice';

export const store = configureStore({
  reducer: { oompaList: oompaListReducer },
});

export type RootState = ReturnType<typeof store.getState>;
