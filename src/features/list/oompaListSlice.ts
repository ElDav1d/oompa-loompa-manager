import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  IItemStampUpdate,
  INewItemStamp,
  IOompaList,
  IOompaListStamp,
  IOompaListWithItemStamp,
} from './interfaces/oompaList';

const initialState: IOompaListWithItemStamp = {
  current_page: 0,
  fetching_date: '',
  oompas: [],
  item_stamp: {
    first_name: '',
    id: '',
    fetching_date: '',
  },
};

export const oompaListSlice = createSlice({
  name: 'oompaList',
  initialState,
  reducers: {
    setNewOompaList(state, action: PayloadAction<IOompaList>) {
      // as long as redux toolkit is being used, immer is being used
      // so state is being protected from mutations
      state.oompas = action.payload.oompas;
      state.current_page = action.payload.current_page;
    },
    setNewOompaListStamp(state, action: PayloadAction<IOompaListStamp>) {
      state.fetching_date = action.payload.fetching_date;
    },
    setNewOompaItemStamp(state, action: PayloadAction<INewItemStamp>) {
      state.item_stamp.first_name = action.payload.first_name;
    },
    updateNewOompaItemStamp(state, action: PayloadAction<IItemStampUpdate>) {
      state.item_stamp.id = action.payload.id;
      state.item_stamp.fetching_date = action.payload.fetching_date;
    },
  },
});

export default oompaListSlice.reducer;
export const {
  setNewOompaList,
  setNewOompaListStamp,
  setNewOompaItemStamp,
  updateNewOompaItemStamp,
} = oompaListSlice.actions;
