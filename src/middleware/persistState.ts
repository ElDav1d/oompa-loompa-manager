import { Middleware } from '@reduxjs/toolkit';
import { STORED_STATE } from '../utils/constants';
import { setNewOompaDetail } from '../features/detail/oompaDetailSlice';
import {
  setNewOompaItemStamp,
  setNewOompaList,
  updateNewOompaItemStamp,
} from '../features/list/oompaListSlice';

const persistState: Middleware = (store) => (next) => (action: unknown) => {
  next(action);

  if (
    setNewOompaDetail.match(action) ||
    setNewOompaItemStamp.match(action) ||
    updateNewOompaItemStamp.match(action) ||
    setNewOompaList.match(action)
  ) {
    localStorage.setItem(STORED_STATE, JSON.stringify(store.getState()));
  }
};

export default persistState;
