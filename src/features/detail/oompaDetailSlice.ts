import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOompaDetail } from './interfaces/oompaDetail';

const initialState: IOompaDetail = {
  last_name: '',
  favorite: {
    color: '',
    food: '',
    random_string: '',
    song: '',
  },
  gender: '',
  image: '',
  profession: '',
  email: '',
  age: 0,
  country: '',
  height: 0,
  description: '',
  quota: '',
};

export const oompaDetailSlice = createSlice({
  name: 'oompaDetail',
  initialState,
  reducers: {
    setNewOompaDetail(state, action: PayloadAction<IOompaDetail>) {
      // as long as redux toolkit is being used, immer is being used
      // so state is being protected from mutations
      Object.assign(state, action.payload);
    },
  },
});

export default oompaDetailSlice.reducer;
export const { setNewOompaDetail } = oompaDetailSlice.actions;
