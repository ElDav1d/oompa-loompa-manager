import { getOompaDetail } from '../services';
import { useEffect, useState } from 'react';
import { useOompaListActions } from '../../list/hooks';
import { useAppSelector } from '../../../hooks';
import { isDataExpired } from '../../../utils';
import { CACHE_TIME } from '../../../utils/constants';
import { IItemStamp } from '../../list/interfaces/oompaList';

const useOompaDetail = (oompaId: string | undefined) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState<unknown>();
  const [isError, setIsError] = useState<unknown>();
  const { setOompaDetail } = useOompaListActions();
  const details = useAppSelector((state) => state.oompaList.details);

  useEffect(() => {
    if (oompaId) {
      const oompaItem = details.find((item: IItemStamp) => item.id === oompaId);

      if (isDataExpired(oompaItem.fetching_date, CACHE_TIME)) {
        const fetchOompa = async () => {
          try {
            const data = await getOompaDetail(oompaId);
            if (data) {
              setOompaDetail({
                ...oompaItem,
                fetching_date: new Date().toISOString(),
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
