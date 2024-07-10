import { useAppDispatch } from '../../../hooks';
import { IItemStampUpdate, INewItemStamp, IOompaList } from '../interfaces/oompaList';
import { setNewOompaItemStamp, setNewOompaList, updateNewOompaItemStamp } from '../oompaListSlice';

const useOompaListActions = () => {
  const dispatch = useAppDispatch();

  const setOompaList = (oompaList: IOompaList) => {
    dispatch(setNewOompaList(oompaList));
  };

  const setOompaItemStamp = (itemStamp: INewItemStamp) => {
    dispatch(setNewOompaItemStamp(itemStamp));
  };

  const updateOompaItemStamp = (itemStampUpdate: IItemStampUpdate) => {
    dispatch(updateNewOompaItemStamp(itemStampUpdate));
  };

  return {
    setOompaList,
    setOompaItemStamp,
    updateOompaItemStamp,
  };
};

export default useOompaListActions;
