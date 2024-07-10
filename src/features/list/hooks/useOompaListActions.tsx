import { useAppDispatch } from '../../../hooks';
import {
  IItemStampUpdate,
  INewItemStamp,
  IOompaList,
  IOompaListStamp,
} from '../interfaces/oompaList';
import {
  setNewOompaItemStamp,
  setNewOompaList,
  setNewOompaListStamp,
  updateNewOompaItemStamp,
} from '../oompaListSlice';

const useOompaListActions = () => {
  const dispatch = useAppDispatch();

  const setOompaList = (oompaList: IOompaList) => {
    dispatch(setNewOompaList(oompaList));
  };

  const setOompaListStamp = (itemStamp: IOompaListStamp) => {
    dispatch(setNewOompaListStamp(itemStamp));
  };

  const setOompaItemStamp = (itemStamp: INewItemStamp) => {
    dispatch(setNewOompaItemStamp(itemStamp));
  };

  const updateOompaItemStamp = (itemStampUpdate: IItemStampUpdate) => {
    dispatch(updateNewOompaItemStamp(itemStampUpdate));
  };

  return {
    setOompaList,
    setOompaListStamp,
    setOompaItemStamp,
    updateOompaItemStamp,
  };
};

export default useOompaListActions;
