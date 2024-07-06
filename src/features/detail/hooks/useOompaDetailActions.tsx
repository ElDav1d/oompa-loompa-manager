import { useAppDispatch } from '../../../hooks';
import { IOompaDetail } from '../interfaces/oompaDetail';
import { setNewOompaDetail } from '../oompaDetailSlice';

const useOompaDetailActions = () => {
  const dispatch = useAppDispatch();

  const setOompaDetail = (oompaDetail: IOompaDetail) => {
    dispatch(setNewOompaDetail(oompaDetail));
  };

  return {
    setOompaDetail,
  };
};

export default useOompaDetailActions;
