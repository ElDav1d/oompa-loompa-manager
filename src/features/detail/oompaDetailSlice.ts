import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OompaDetail } from './interfaces/oompaDetail';

const initialState: OompaDetail = {
  gender: '',
  image: '',
  profession: '',
  description: '',
};

export const oompaDetailSlice = createSlice({
  name: 'oompaDetail',
  initialState,
  reducers: {
    setNewOompaDetail(state, action: PayloadAction<OompaDetail>) {
      // as long as redux toolkit is being used, immer is being used
      // so state is being protected from mutations
      Object.assign(state, action.payload);
    },
  },
});

export default oompaDetailSlice.reducer;
export const { setNewOompaDetail } = oompaDetailSlice.actions;
