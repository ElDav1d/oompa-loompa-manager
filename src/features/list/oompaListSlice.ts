import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IOompaList } from './interfaces/oompaList';

const initialState: IOompaList = {
  fetchingDate: '',
  oompas: [],
  itemStamp: {
    first_name: '',
    fetchingDate: '',
  },
};

export const oompaListSlice = createSlice({
  name: 'oompaList',
  initialState,
  reducers: {
    setNewOompaList(state, action: PayloadAction<IOompaList>) {
      // as long as redux toolkit is being used, immer is being used
      // so state is being protected from mutations
      state.fetchingDate = action.payload.fetchingDate;
      state.oompas = action.payload.oompas;
    },
    setNewOompaItemStamp(state, action: PayloadAction<IOompaList>) {
      state.itemStamp = action.payload.itemStamp;
    },
  },
});

export default oompaListSlice.reducer;
export const { setNewOompaList, setNewOompaItemStamp } = oompaListSlice.actions;
