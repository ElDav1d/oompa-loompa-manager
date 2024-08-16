import { getOompaDetail } from '../services';
import { useEffect, useState } from 'react';
import { IOompaDetail } from '../interfaces/oompaDetail';

const useOompaDetail = (oompaId: string | undefined) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<unknown>();
  const [oompaDetail, setOompaDetail] = useState<IOompaDetail | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (oompaId) {
        try {
          const data = await getOompaDetail(oompaId);
          setOompaDetail(data);
        } catch (error) {
          setIsError(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [oompaId]);

  return {
    isError,
    isLoading,
    oompaDetail,
  };
};

export default useOompaDetail;
