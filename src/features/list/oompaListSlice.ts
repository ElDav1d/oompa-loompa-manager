import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IItemStamp, IItemStampUpdate, IOompaListWithItemStamp } from './interfaces/oompaList';
import { STORED_STATE_LIST } from '../../utils/constants';

const DEFAULT_STATE: IOompaListWithItemStamp = {
  current_page: 0,
  fetching_date: '',
  oompas: [],
  item_stamps: [],
};

const initialState = (() => {
  const persistedState = localStorage.getItem(STORED_STATE_LIST);

  if (persistedState && JSON.parse(persistedState).oompas?.length) {
    return JSON.parse(persistedState);
  } else {
    return DEFAULT_STATE;
  }
})();

export const oompaListSlice = createSlice({
  name: 'oompaList',
  initialState,
  reducers: {
    setNewOompaList(state, action) {
      // as long as redux toolkit is being used, immer is being used
      // so state is being protected from mutations
      state.oompas = action.payload.oompas;
      state.current_page = action.payload.current_page;
    },
    setNewOompaListStamp(state, action) {
      state.fetching_date = action.payload.fetching_date;
    },
    setNewOompaItemStamp(state, action: PayloadAction<IItemStamp>) {
      const hasItemStamp = state.item_stamps.some(
        (stamp: IItemStamp) => stamp.id === action.payload.id,
      );

      if (hasItemStamp) {
        return;
      } else {
        const newStamp = {
          first_name: action.payload.first_name,
          id: action.payload.id,
          fetching_date: '',
        };

        state.item_stamps.push(newStamp);
      }
    },
    updateNewOompaItemStamp(state, action: PayloadAction<IItemStampUpdate>) {
      // find item
      const items = [...state.item_stamps];
      const itemIndex = items.findIndex((item) => item.id === action.payload.id);
      const currentItem = items[itemIndex];

      // update item
      currentItem.fetching_date = action.payload.fetching_date;
      currentItem.gender = action.payload.gender;
      currentItem.description = action.payload.description;
      currentItem.image = action.payload.image;
      currentItem.profession = action.payload.profession;

      // update state
      state.item_stamps = items;
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
