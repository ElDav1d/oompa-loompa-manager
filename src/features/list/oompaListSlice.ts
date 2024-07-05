import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IOompaList } from './interfaces/oompaList';

const initialState: IOompaList = {
  fetchingDate: '',
  oompas: [],
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
  },
});

export default oompaListSlice.reducer;
export const { setNewOompaList } = oompaListSlice.actions;
