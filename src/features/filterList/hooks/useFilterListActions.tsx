import { useAppDispatch } from '../../../hooks';
import { setNewFilterString } from '../filterListSlice';
import { IFilterList } from '../interfaces';

const useFilterListActions = () => {
  const dispatch = useAppDispatch();

  const setFilterList = (filterList: IFilterList) => {
    dispatch(setNewFilterString(filterList));
  };

  return {
    setFilterList,
  };
};

export default useFilterListActions;
