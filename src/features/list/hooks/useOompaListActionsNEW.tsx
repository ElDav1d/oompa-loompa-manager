import { useAppDispatch } from '../../../hooks';
import { IItemStamp, IItemDetail, IOompaListStamp, IOompaListItem } from '../interfaces/oompaList';
import {
  setNewOompaItemStamp,
  setNewOompaDetail,
  setNewOompaListNEW,
  setNewOompaListStampNEW,
} from '../oompaListSliceNEW';

const useOompaListActionsNew = () => {
  const dispatch = useAppDispatch();

  const setOompaListNEW = (items: IOompaListItem[]) => {
    dispatch(setNewOompaListNEW(items));
  };

  const setOompaListStampNEW = (itemStamp: IOompaListStamp) => {
    dispatch(setNewOompaListStampNEW(itemStamp));
  };

  const setOompaItemStamp = (itemStamp: IItemStamp) => {
    dispatch(setNewOompaItemStamp(itemStamp));
  };

  const setOompaDetail = (itemStampUpdate: IItemDetail) => {
    dispatch(setNewOompaDetail(itemStampUpdate));
  };

  return {
    setOompaListNEW,
    setOompaListStampNEW,
    setOompaItemStamp,
    setOompaDetail,
  };
};

export default useOompaListActionsNew;
