import { useAppDispatch } from '../../../hooks';
import { OompaDetail } from '../interfaces/oompaDetail';
import { setNewOompaDetail } from '../oompaDetailSlice';

const useOompaDetailActions = () => {
  const dispatch = useAppDispatch();

  const setOompaDetail = (oompaDetail: OompaDetail) => {
    dispatch(setNewOompaDetail(oompaDetail));
  };

  return {
    setOompaDetail,
  };
};

export default useOompaDetailActions;
