import { useInView } from 'react-intersection-observer';
import { Loader } from '../../ui/Loader';
import { useEffect } from 'react';
import { useOompaList } from './hooks';
import { useAppSelector } from '../../hooks';
import OompaListItem from './OompaListItem';
import {
  LITERAL_FILTER_LIST_EMPTY_RESULTS,
  LITERAL_LIST_ERROR_MESSAGE,
  LITERAL_LIST_LOADING,
} from '../../utils/constants';
import { IOompaListItem } from './interfaces/oompaList';
import { useFilterList } from '../filterList/hooks';
import { Container } from '../../ui/Container';

const OompaList = () => {
  const filterString = useAppSelector((state) => state.filterList.filterString);

  const { isLoading, isError, fetchedOompas, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useOompaList();

  const { ref, inView } = useInView({
    threshold: 1,
  });

  const filteredOompas: IOompaListItem[] = useFilterList({
    items: fetchedOompas,
    filterString,
    filterProperties: ['first_name', 'last_name', 'profession'],
  });

  useEffect(() => {
    if (
      (inView && !isFetchingNextPage && hasNextPage) ||
      (filteredOompas.length <= 1 && !isFetchingNextPage && hasNextPage)
    ) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, filteredOompas.length]);

  const hasEmptyList =
    !isError && !isLoading && !isFetchingNextPage && filteredOompas?.length === 0;

  return (
    <Container element={'section'}>
      {isError && <p>{LITERAL_LIST_ERROR_MESSAGE}</p>}

      {!isLoading && isFetchingNextPage && hasEmptyList && (
        <h3>{LITERAL_FILTER_LIST_EMPTY_RESULTS}</h3>
      )}

      {filteredOompas?.length > 0 && (
        <ul aria-live='polite' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {filteredOompas.map(({ id, image, first_name, gender, profession }) => (
            <OompaListItem
              key={id}
              id={id.toString()}
              image={image}
              first_name={first_name}
              gender={gender}
              profession={profession}
            />
          ))}
        </ul>
      )}

      {(isLoading || isFetchingNextPage || hasNextPage) && (
        <div ref={ref} className='flex align-middle'>
          <Loader loadingLabel={LITERAL_LIST_LOADING} />
        </div>
      )}
    </Container>
  );
};

export default OompaList;
