import { useInfiniteQuery } from '@tanstack/react-query';
import { getOompaList } from '../services';
import { CACHE_TIME, QUERY_KEY_LIST } from '../../../utils/constants';
import useOompaListActions from './useOompaListActions';
import { useEffect } from 'react';
import { IOompaListItem, IOompaListWithStamp } from '../interfaces/oompaList';
import { isDataExpired } from '../../../utils';
import { useAppSelector } from '../../../hooks';
import { isValidOompaList } from '../../detail/hooks/utils';

const useOompaList = () => {
  const { setOompaList, setOompaListStamp } = useOompaListActions();
  const oompaListState = useAppSelector((state) => state.oompaList);

  const shouldFetch = isDataExpired(oompaListState.fetching_date, CACHE_TIME);

  const getCurrentPageParam = (list: IOompaListWithStamp, shouldFetch: boolean) => {
    if (list?.fetching_date) {
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
      initialPageParam: getCurrentPageParam(oompaListState, shouldFetch),
      refetchOnWindowFocus: false,
      staleTime: shouldFetch ? 0 : Infinity,
    });

  const newFetchingDate = new Date().toISOString();

  const fetchedOompas =
    data?.pages?.flatMap((page) =>
      page?.data.results.map(({ id, first_name, gender, profession, image }: IOompaListItem) => {
        return {
          id: id.toString(),
          first_name,
          gender,
          profession,
          image,
        };
      }),
    ) || [];

  const current_page = data?.pages?.length;

  const setValidOompaList = () => {
    const payload = { items: fetchedOompas, current_page };
    isValidOompaList(payload) && setOompaList(payload);
  };

  useEffect(() => {
    if (shouldFetch) {
      setOompaListStamp({
        fetching_date: newFetchingDate,
      });

      setValidOompaList();
    } else {
      setValidOompaList();
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
