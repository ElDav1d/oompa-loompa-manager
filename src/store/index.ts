import { configureStore } from '@reduxjs/toolkit';
import oompaListReducer from '../features/list/oompaListSlice';
import oompaDetailReducer from '../features/detail/oompaDetailSlice';
import filterListReducer from '../features/filterList/filterListSlice';

export const store = configureStore({
  reducer: {
    oompaList: oompaListReducer,

    oompaDetail: oompaDetailReducer,
    filterList: filterListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
