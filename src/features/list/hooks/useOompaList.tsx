import { useInfiniteQuery } from '@tanstack/react-query';
import { getOompaList } from '../services';
import { CACHE_TIME, QUERY_KEY_LIST, STORED_STATE } from '../../../utils/constants';
import useOompaListActions from './useOompaListActions';
import { useCallback, useEffect } from 'react';
import { IOompaList } from '../interfaces/oompaList';

const useOompaList = () => {
  const { setOompaList, setOompaListStamp } = useOompaListActions();
  const persistedState = localStorage.getItem(STORED_STATE);
  const { oompaList: persistedOompaList } = persistedState
    ? JSON.parse(persistedState)
    : { oompaList: null };

  const isDataExpired = (lastFetch: string, cacheTime: number) => {
    const now = new Date().getTime();
    const lastFetchDate = new Date(lastFetch).getTime();

    if (!lastFetch) {
      return true;
    } else {
      return now - lastFetchDate > cacheTime;
    }
  };

  const shouldFetch =
    persistedOompaList && isDataExpired(persistedOompaList.fetching_date, CACHE_TIME);

  const getCurrentPageParam = (persistedOompaList: IOompaList, shouldFetch: boolean) => {
    if (persistedOompaList) {
      if (shouldFetch) {
        return undefined;
      } else {
        return persistedOompaList.current_page;
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
      initialPageParam: getCurrentPageParam(persistedOompaList, shouldFetch),
      refetchOnWindowFocus: false,
      staleTime: shouldFetch ? 0 : Infinity,
    });

  const newFetchingDate = new Date().toISOString();

  const fetchedOompas = data?.pages?.flatMap((page) => page?.data.results) || [];

  const memoizedSetOompaList = useCallback(setOompaList, []);
  const memoizedSetOompaListStamp = useCallback(setOompaListStamp, []);

  useEffect(() => {
    if (shouldFetch) {
      if (data) {
        memoizedSetOompaListStamp({
          fetching_date: newFetchingDate,
        });

        memoizedSetOompaList({
          oompas: fetchedOompas,
          current_page: data?.pages?.length,
        });
      }
    } else {
      if (data) {
        memoizedSetOompaList({
          oompas: fetchedOompas,
          current_page: data.pages.length,
        });
      }
    }
  }, [data, shouldFetch]);

  if (!shouldFetch) {
    return {
      isLoading,
      isError,
      fetchedOompas,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
    };
  } else {
    return {
      isLoading,
      isError,
      fetchedOompas,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
    };
  }
};

export default useOompaList;
