import { getOompaDetail } from '../services';
import { useEffect, useState } from 'react';
import { OompaDetail } from '../interfaces/oompaDetail';

const useOompaDetail = (oompaId: string | undefined) => {
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState<unknown>();
  const [oompaDetail, setOompaDetail] = useState<OompaDetail>();

  useEffect(() => {
    const fetchOompa = async () => {
      if (oompaId) {
        try {
          const data = await getOompaDetail(oompaId);
          setOompaDetail(data);
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
    oompaDetail,
  };
};

export default useOompaDetail;
