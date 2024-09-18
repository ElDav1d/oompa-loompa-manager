import { getOompaDetail } from '../services';
import { useEffect, useState } from 'react';
import { useOompaListActions } from '../../list/hooks';
import { useAppSelector } from '../../../hooks';
import { isDataExpired } from '../../../utils';
import { CACHE_TIME } from '../../../utils/constants';

const useOompaDetail = (oompaId: string | undefined) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState<unknown>();
  const [isError, setIsError] = useState<unknown>();
  const { updateOompaItemStamp } = useOompaListActions();
  const item_stamps = useAppSelector((state) => state.oompaList.item_stamps);

  useEffect(() => {
    if (oompaId) {
      const oompaItem = item_stamps.find((stamp: any) => stamp.id === oompaId);

      if (isDataExpired(oompaItem.fetching_date, CACHE_TIME)) {
        const fetchOompa = async () => {
          try {
            const data = await getOompaDetail(oompaId);
            if (data) {
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
        };
        fetchOompa();
      } else {
        setIsFetching(false);
        setIsLoading(false);
      }
    }
  }, [oompaId]);

  return {
    isError,
    isLoading,
    isFetching,
  };
};

export default useOompaDetail;
