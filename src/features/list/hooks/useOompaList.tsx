import { useInfiniteQuery } from '@tanstack/react-query';
import { getOompaList } from '../services';

const useOompaList = () => {
  const { isLoading, isError, data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['oompas'],
      queryFn: ({ pageParam }: { pageParam: number | undefined }) => getOompaList({ pageParam }),
      getNextPageParam: (lastPage) => lastPage?.nextCursor,
      initialPageParam: undefined,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    });

  const newFetchingDate = new Date();

  const fetchedOompas = data?.pages?.flatMap((page) => page?.data.results) || [];

  return {
    isLoading,
    isError,
    newFetchingDate,
    fetchedOompas,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useOompaList;
