import { useInView } from 'react-intersection-observer';
import { Loader } from '../Loader';
import { useEffect } from 'react';
import { useOompaList } from './hooks';
import { useOompaListActions } from './hooks';
import { useAppSelector } from '../../hooks';

const OompaList = () => {
  const oompas = useAppSelector((state) => state.oompaList.oompas);

  const { setOompaList } = useOompaListActions();

  const {
    isLoading,
    isError,
    newFetchingDate,
    fetchedOompas,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useOompaList();

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      fetchNextPage();

      setOompaList({
        fetchingDate: new Date(newFetchingDate).toISOString(),
        oompas: fetchedOompas,
      });
    }
  }, [inView, hasNextPage]);

  return (
    <section>
      {isError && <p>There was an error fetching the oompas</p>}

      {oompas?.length > 0 && (
        <ul>
          {oompas.map(({ id, image, first_name, gender, profession }) => (
            <li key={id}>
              <img src={image} alt={first_name} title={first_name} />
              <h3>{first_name}</h3>
              <p>{gender}</p>
              <p>{profession}</p>
            </li>
          ))}
        </ul>
      )}

      {(isLoading || hasNextPage) && (
        <div ref={ref}>
          <Loader loadingLabel={'loading oompas'} />
        </div>
      )}
    </section>
  );
};

export default OompaList;
