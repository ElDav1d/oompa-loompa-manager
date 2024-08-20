import { Middleware } from '@reduxjs/toolkit';
import { STORED_STATE_LIST, STORED_STATE_DETAIL } from '../utils/constants';
import { setNewOompaDetail } from '../features/detail/oompaDetailSlice';
import {
  setNewOompaItemStamp,
  setNewOompaList,
  updateNewOompaItemStamp,
} from '../features/list/oompaListSlice';

const persistState: Middleware = (store) => (next) => (action: unknown) => {
  next(action);

  if (
    setNewOompaItemStamp.match(action) ||
    updateNewOompaItemStamp.match(action) ||
    setNewOompaList.match(action)
  ) {
    localStorage.setItem(STORED_STATE_LIST, JSON.stringify(store.getState().oompaList));
  }

  if (setNewOompaDetail.match(action)) {
    localStorage.setItem(STORED_STATE_DETAIL, JSON.stringify(store.getState().oompaDetail));
  }
};

export default persistState;
