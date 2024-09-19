import { useAppDispatch } from '../../../hooks';
import { IItemStamp, IItemDetail, IOompaList, IOompaListStamp } from '../interfaces/oompaList';
import {
  setNewOompaItemStamp,
  setNewOompaDetail,
  setNewOompaListNEW,
  setNewOompaListStampNEW,
} from '../oompaListSliceNEW';

const useOompaListActionsNew = () => {
  const dispatch = useAppDispatch();

  const setOompaListNEW = (oompaList: IOompaList) => {
    dispatch(setNewOompaListNEW(oompaList));
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
