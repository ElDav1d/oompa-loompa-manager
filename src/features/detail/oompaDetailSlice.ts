import { createSlice } from '@reduxjs/toolkit';
import { IOompaDetail } from './interfaces/oompaDetail';
import { mockOompaDetail } from './mocks/mockOompaDetail';

const initialState: IOompaDetail = mockOompaDetail;

export const oompaDetailSlice = createSlice({
  name: 'oompaDetail',
  initialState,
  reducers: {},
});

export default oompaDetailSlice.reducer;
