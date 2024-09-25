import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  IItemStamp,
  IItemDetail,
  IOompaListWithDetails,
  IOompaListItem,
} from './interfaces/oompaList';
import { STORED_STATE_LIST_NEW } from '../../utils/constants';

const DEFAULT_STATE: IOompaListWithDetails = {
  current_page: 1,
  fetching_date: '',
  items: [],
  details: [],
};

const initialState = (() => {
  const persistedState = localStorage.getItem(STORED_STATE_LIST_NEW);

  if (persistedState && JSON.parse(persistedState).oompas?.length) {
    return JSON.parse(persistedState);
  } else {
    return DEFAULT_STATE;
  }
})();

export const oompaListSliceNEW = createSlice({
  name: 'oompaListNEW',
  initialState,
  reducers: {
    setNewOompaListNEW(state, action: PayloadAction<IOompaListItem[]>) {
      // as long as redux toolkit is being used, immer is being used
      // so state is being protected from mutations
      state.items = [...state.items, ...action.payload];
      state.current_page += 1;
    },
    setNewOompaListStampNEW(state, action) {
      state.fetching_date = action.payload.fetching_date;
    },
    setNewOompaItemStamp(state, action: PayloadAction<IItemStamp>) {
      const hasItemStamp = state.details.some(
        (detail_stamp: IItemStamp) => detail_stamp.id === action.payload.id,
      );

      if (hasItemStamp) {
        return;
      } else {
        const newStamp = {
          first_name: action.payload.first_name,
          id: action.payload.id,
        };

        state.details.push(newStamp);
      }
    },
    setNewOompaDetail(state, action: PayloadAction<IItemDetail>) {
      // find item
      const items = [...state.items];
      const itemIndex = items.findIndex((item) => item.id === action.payload.id);
      const currentItem = items[itemIndex];

      // update item
      currentItem.fetching_date = action.payload.fetching_date;
      currentItem.gender = action.payload.gender;
      currentItem.description = action.payload.description;
      currentItem.image = action.payload.image;
      currentItem.profession = action.payload.profession;

      // update state
      state.items = items;
    },
  },
});

export default oompaListSliceNEW.reducer;
export const {
  setNewOompaListNEW,
  setNewOompaListStampNEW,
  setNewOompaItemStamp,
  setNewOompaDetail,
} = oompaListSliceNEW.actions;
