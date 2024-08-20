import { useInfiniteQuery } from '@tanstack/react-query';
import { getOompaList } from '../services';
import { CACHE_TIME, QUERY_KEY_LIST, STORED_STATE_LIST } from '../../../utils/constants';
import useOompaListActions from './useOompaListActions';
import { useEffect } from 'react';
import { IOompaList } from '../interfaces/oompaList';
import { isDataExpired } from '../../../utils';

const useOompaList = () => {
  const { setOompaList, setOompaListStamp } = useOompaListActions();
  const persistedState = localStorage.getItem(STORED_STATE_LIST);
  const persistedList = persistedState && JSON.parse(persistedState);

  const shouldFetch = isDataExpired(persistedList.fetching_date, CACHE_TIME);

  const getCurrentPageParam = (list: IOompaList, shouldFetch: boolean) => {
    if (list) {
      if (shouldFetch) {
        return undefined;
      } else {
        return list.current_page;
      }
    } else {
      return undefined;
    }
  };

  const { isLoading, isError, data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY_LIST],
      queryFn: ({ pageParam }: { pageParam: number | undefined }) => getOompaList({ pageParam }),
      getNextPageParam: (lastPage) => lastPage?.nextCursor,
      initialPageParam: getCurrentPageParam(persistedList, shouldFetch),
      refetchOnWindowFocus: false,
      staleTime: shouldFetch ? 0 : Infinity,
    });

  const newFetchingDate = new Date().toISOString();

  const fetchedOompas = data?.pages?.flatMap((page) => page?.data.results) || [];

  useEffect(() => {
    if (shouldFetch) {
      setOompaListStamp({
        fetching_date: newFetchingDate,
      });

      setOompaList({
        oompas: fetchedOompas,
        current_page: data?.pages?.length,
      });
    } else {
      setOompaList({
        oompas: fetchedOompas,
        current_page: data?.pages?.length,
      });
    }
  }, [data, shouldFetch]);

  if (!shouldFetch) {
    return {
      isLoading,
      isError,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
    };
  } else {
    return {
      isLoading,
      isError,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
    };
  }
};

export default useOompaList;
