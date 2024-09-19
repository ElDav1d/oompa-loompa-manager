import { Middleware } from '@reduxjs/toolkit';
import { STORED_STATE_LIST, STORED_STATE_LIST_NEW } from '../utils/constants';

import {
  setNewOompaItemStamp,
  setNewOompaList,
  setNewOompaDetail,
} from '../features/list/oompaListSlice';
import { setNewOompaListNEW, setNewOompaListStampNEW } from '../features/list/oompaListSliceNEW';

const persistState: Middleware = (store) => (next) => (action: unknown) => {
  next(action);

  if (
    setNewOompaItemStamp.match(action) ||
    setNewOompaDetail.match(action) ||
    setNewOompaList.match(action)
  ) {
    localStorage.setItem(STORED_STATE_LIST, JSON.stringify(store.getState().oompaList));
  }

  // New list
  if (setNewOompaListStampNEW.match(action) || setNewOompaListNEW.match(action)) {
    localStorage.setItem(STORED_STATE_LIST_NEW, JSON.stringify(store.getState().oompaList));
  }
};

export default persistState;
