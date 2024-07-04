import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: 1,
  total: 0,
  results: [],
};

export const oompaListSlice = createSlice({
  name: 'oompaList',
  initialState,
  reducers: {},
});

export default oompaListSlice.reducer;
