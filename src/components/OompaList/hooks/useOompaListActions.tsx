import { useAppDispatch } from '../../../hooks';
import { IOompaList } from '../interfaces/oompaList';
import { setNewOompaList } from '../oompaListSlice';

const useOompaListActions = () => {
  const dispatch = useAppDispatch();

  const setOompaList = (oompaList: IOompaList) => {
    dispatch(setNewOompaList(oompaList));
  };

  return {
    setOompaList,
  };
};

export default useOompaListActions;
