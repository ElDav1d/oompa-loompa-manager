import { useInView } from 'react-intersection-observer';
import { Loader } from '../../ui/Loader';
import { useEffect } from 'react';
import { useOompaList } from './hooks';
import { useOompaListActions } from './hooks';
import { useAppSelector } from '../../hooks';
import OompaListItem from './OompaListItem';

const OompaList = () => {
  const oompaList = useAppSelector((state) => state.oompaList);
  const { oompas } = oompaList;

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
        ...oompaList,
        fetchingDate: newFetchingDate,
        oompas: fetchedOompas,
      });
    }
  }, [inView, hasNextPage]);

  return (
    <section>
      {isError && <p>There was an error getting the oompas</p>}

      {oompas?.length > 0 && (
        <ul>
          {oompas.map(({ id, image, first_name, gender, profession }) => (
            <OompaListItem
              key={id}
              id={id}
              image={image}
              first_name={first_name}
              gender={gender}
              profession={profession}
            />
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
