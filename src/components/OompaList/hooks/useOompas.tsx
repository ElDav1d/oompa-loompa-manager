import { useInfiniteQuery } from '@tanstack/react-query';
import getOompas from '../services/getOompas';

const useOompas = () => {
  const { isLoading, isError, data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['oompas'],
      queryFn: ({ pageParam }: { pageParam: number | undefined }) => getOompas({ pageParam }),
      getNextPageParam: (lastPage) => lastPage?.nextCursor,
      initialPageParam: undefined,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    });

  const oompas = data?.pages?.flatMap((page) => page?.data.results) || [];

  return {
    isLoading,
    isError,
    oompas,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useOompas;
