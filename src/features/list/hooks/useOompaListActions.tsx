import { useAppDispatch } from '../../../hooks';
import { IItemStamp, IItemDetail, IOompaList, IOompaListStamp } from '../interfaces/oompaList';
import {
  setNewOompaItemStamp,
  setNewOompaList,
  setNewOompaListStamp,
  setNewOompaDetail,
} from '../oompaListSlice';

const useOompaListActions = () => {
  const dispatch = useAppDispatch();

  const setOompaList = (oompaList: IOompaList) => {
    dispatch(setNewOompaList(oompaList));
  };

  const setOompaListStamp = (itemStamp: IOompaListStamp) => {
    dispatch(setNewOompaListStamp(itemStamp));
  };

  const setOompaItemStamp = (itemStamp: IItemStamp) => {
    dispatch(setNewOompaItemStamp(itemStamp));
  };

  const setOompaDetail = (itemStampUpdate: IItemDetail) => {
    dispatch(setNewOompaDetail(itemStampUpdate));
  };

  return {
    setOompaList,
    setOompaListStamp,
    setOompaItemStamp,
    setOompaDetail,
  };
};

export default useOompaListActions;
