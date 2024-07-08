import { useQuery } from '@tanstack/react-query';
import { getOompaDetail } from '../services';
import { QUERY_KEY_DETAIL } from '../../../utils/constants';

const useOompaDetail = (oompaId: string | undefined) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [QUERY_KEY_DETAIL, oompaId],
    queryFn: () => getOompaDetail(oompaId),
  });

  return {
    isLoading,
    isError,
    fetchedOompaDetail: data,
  };
};

export default useOompaDetail;
