import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OompaDetail } from './interfaces/oompaDetail';
import { STORED_STATE_DETAIL } from '../../utils/constants';

const DEFAULT_STATE: OompaDetail = {
  gender: '',
  image: '',
  profession: '',
  description: '',
};

const initialState = () => {
  const persistedState = localStorage.getItem(STORED_STATE_DETAIL);

  if (persistedState) {
    return JSON.parse(persistedState);
  } else {
    return DEFAULT_STATE;
  }
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
