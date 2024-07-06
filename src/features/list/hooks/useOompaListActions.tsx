import { useAppDispatch } from '../../../hooks';
import { IOompaList } from '../interfaces/oompaList';
import { setNewOompaItemStamp, setNewOompaList } from '../oompaListSlice';

const useOompaListActions = () => {
  const dispatch = useAppDispatch();

  const setOompaList = (oompaList: IOompaList) => {
    dispatch(setNewOompaList(oompaList));
  };

  const setOompaItemStamp = (oompaList: IOompaList) => {
    dispatch(setNewOompaItemStamp(oompaList));
  };

  return {
    setOompaList,
    setOompaItemStamp,
  };
};

export default useOompaListActions;
