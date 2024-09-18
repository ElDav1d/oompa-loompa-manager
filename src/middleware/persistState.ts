import { Middleware } from '@reduxjs/toolkit';
import { STORED_STATE_LIST } from '../utils/constants';

import {
  setNewOompaItemStamp,
  setNewOompaList,
  setNewOompaDetail,
} from '../features/list/oompaListSlice';

const persistState: Middleware = (store) => (next) => (action: unknown) => {
  next(action);

  if (
    setNewOompaItemStamp.match(action) ||
    setNewOompaDetail.match(action) ||
    setNewOompaList.match(action)
  ) {
    localStorage.setItem(STORED_STATE_LIST, JSON.stringify(store.getState().oompaList));
  }
};

export default persistState;
