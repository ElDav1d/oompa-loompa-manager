import { useEffect } from 'react';
import { useAppSelector } from '../../../hooks';
import { getOompaListNEW } from '../services';
import { useOompaListActionsNEW } from '.';

const useOompaListNEW = (inView: boolean) => {
  const { setOompaListNEW } = useOompaListActionsNEW();
  const { current_page } = useAppSelector((state) => state.oompaListNEW);

  useEffect(() => {
    if (inView) {
      const fetchPage = async () => {
        const page = await getOompaListNEW(current_page);

        setOompaListNEW(page.results);
      };

      fetchPage();
    }
  }, [inView]);
};

export default useOompaListNEW;
