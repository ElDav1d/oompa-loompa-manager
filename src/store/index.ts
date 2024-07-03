import { configureStore } from '@reduxjs/toolkit';
import oompaListReducer from '../pages/components/OompaList/oompaListSlice';
import { IOompaListPage } from '../pages/components/OompaList/interfaces/oompaList';

export interface IAppState {
  oompaList: IOompaListPage;
}

export const store = configureStore({
  reducer: { oompaList: oompaListReducer },
});
