import { createSlice } from '@reduxjs/toolkit';
import { IOompaListPage } from './interfaces/oompaList';
import { mockOompaListPage } from './mocks/mockOompaListPage';

const initialState: IOompaListPage = mockOompaListPage;

export const oompaListSlice = createSlice({
  name: 'oompaList',
  initialState,
  reducers: {},
});

export default oompaListSlice.reducer;
