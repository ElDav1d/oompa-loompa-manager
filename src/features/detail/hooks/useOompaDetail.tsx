import { useQuery } from '@tanstack/react-query';
import { getOompaDetail } from '../services';

const useOompaDetail = (oompaId: string | undefined) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['oompaDetail', oompaId],
    queryFn: () => getOompaDetail(oompaId),
  });

  return {
    isLoading,
    isError,
    fetchedOompaDetail: data,
  };
};

export default useOompaDetail;
