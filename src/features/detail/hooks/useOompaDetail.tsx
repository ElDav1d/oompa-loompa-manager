import { getOompaDetail } from '../services';
import { useEffect, useState } from 'react';
import useOompaDetailActions from './useOompaDetailActions';

const useOompaDetail = (oompaId: string | undefined) => {
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState<unknown>();
  const { setOompaDetail } = useOompaDetailActions();

  useEffect(() => {
    const fetchOompa = async () => {
      if (oompaId) {
        try {
          const data = await getOompaDetail(oompaId);
          if (data) {
            setOompaDetail(data);
          }
        } catch (error) {
          setIsError(error);
        } finally {
          setIsFetching(false);
        }
      }
    };

    fetchOompa();
  }, [oompaId]);

  return {
    isError,
    isFetching,
  };
};

export default useOompaDetail;
