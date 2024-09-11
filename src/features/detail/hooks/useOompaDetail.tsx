import { getOompaDetail } from '../services';
import { useEffect, useState } from 'react';
import useOompaDetailActions from './useOompaDetailActions';
import { useOompaListActions } from '../../list/hooks';

const useOompaDetail = (oompaId: string | undefined) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState<unknown>();
  const [isError, setIsError] = useState<unknown>();
  const { setOompaDetail } = useOompaDetailActions();
  const { updateOompaItemStamp } = useOompaListActions();

  useEffect(() => {
    const fetchOompa = async () => {
      if (oompaId) {
        try {
          const data = await getOompaDetail(oompaId);
          if (data) {
            setOompaDetail(data);

            const fetching_date = new Date().toISOString();
            updateOompaItemStamp({
              fetching_date,
              id: oompaId,
              gender: data.gender,
              description: data.description,
              image: data.image,
              profession: data.profession,
            });
          }
        } catch (error) {
          setIsError(error);
        } finally {
          setIsFetching(false);
          setIsLoading(false);
        }
      }
    };

    fetchOompa();
  }, [oompaId]);

  return {
    isError,
    isLoading,
    isFetching,
  };
};

export default useOompaDetail;
