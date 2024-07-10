import { Middleware } from '@reduxjs/toolkit';
import { STORED_STATE } from '../utils/constants';
import { setNewOompaDetail } from '../features/detail/oompaDetailSlice';
import { setNewOompaItemStamp, updateNewOompaItemStamp } from '../features/list/oompaListSlice';

const persistState: Middleware = (store) => (next) => (action: unknown) => {
  next(action);

  // TODO - storage is retrieved from localStorage nad pushed again
  // DRY if blocks: data cannot be manipulated in DB style
  if (setNewOompaDetail.match(action)) {
    localStorage.setItem(STORED_STATE, JSON.stringify(store.getState()));
  }

  if (setNewOompaItemStamp.match(action)) {
    localStorage.setItem(STORED_STATE, JSON.stringify(store.getState()));
  }

  if (updateNewOompaItemStamp.match(action)) {
    localStorage.setItem(STORED_STATE, JSON.stringify(store.getState()));
  }
};

export default persistState;
