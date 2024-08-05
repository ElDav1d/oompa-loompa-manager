import { CACHE_TIME, STORED_STATE } from '../../../utils/constants';
import { useQuery } from '@tanstack/react-query';
import { getOompaDetail } from '../services';
import { QUERY_KEY_DETAIL } from '../../../utils/constants';
import { useOompaDetailActions } from '../hooks';
import { useOompaListActions } from '../../list/hooks';
import { useEffect } from 'react';
import { isDataExpired } from '../../../utils';

const useOompaDetail = (oompaId: string | undefined) => {
  const { setOompaDetail } = useOompaDetailActions();
  const { updateOompaItemStamp } = useOompaListActions();
  const persistedState = localStorage.getItem(STORED_STATE);

  const {
    oompaDetail: persistedOompaDetail,
    oompaList: { item_stamp },
  } = persistedState && JSON.parse(persistedState);

  const shouldFetch =
    item_stamp.id !== oompaId || isDataExpired(item_stamp.fetching_date, CACHE_TIME);

  const { isLoading, isError, data } = useQuery({
    queryKey: [QUERY_KEY_DETAIL, oompaId],
    queryFn: () => getOompaDetail(oompaId),
    enabled: shouldFetch,
  });

  useEffect(() => {
    if (data && oompaId && shouldFetch) {
      setOompaDetail(data);
      updateOompaItemStamp({
        fetching_date: new Date().toISOString(),
        id: oompaId,
      });
    }
  }, [data, oompaId, shouldFetch, setOompaDetail, updateOompaItemStamp]);

  if (!shouldFetch) {
    return {
      isLoading: false,
      isError: false,
      oompaDetail: persistedOompaDetail,
    };
  } else {
    return {
      isLoading,
      isError,
      oompaDetail: data,
    };
  }
};

export default useOompaDetail;
