import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterList } from './interfaces';

const initialState: IFilterList = {
  filterString: '',
};

export const filterListSlice = createSlice({
  name: 'filterList',
  initialState,
  reducers: {
    setNewFilterString(state, action: PayloadAction<IFilterList>) {
      // as long as redux toolkit is being used, immer is being used
      // so state is being protected from mutations
      state.filterString = action.payload.filterString;
    },
  },
});

export default filterListSlice.reducer;
export const { setNewFilterString } = filterListSlice.actions;
