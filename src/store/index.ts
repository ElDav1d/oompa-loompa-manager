import { configureStore } from '@reduxjs/toolkit';
import oompaListReducer from '../features/list/oompaListSlice';
import { persistState } from '../middleware';
import filterListReducer from '../features/filterList/filterListSlice';

export const store = configureStore({
  reducer: {
    oompaList: oompaListReducer,
    filterList: filterListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistState),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
