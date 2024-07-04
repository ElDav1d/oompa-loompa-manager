import { useInView } from 'react-intersection-observer';
import { Loader } from '../Loader';
import { HumanizedGender } from './interfaces/oompaList';
import { useEffect } from 'react';

import { useOompas } from './hooks';

const OompaList = () => {
  const { isLoading, isError, oompas, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useOompas();

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      console.log('yay');
      fetchNextPage();
    }
  }, [inView]);

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

      <h2>is loading {`${isLoading}`}</h2>
      <h2>has next page {`${hasNextPage}`}</h2>

      {(isLoading || hasNextPage) && (
        <div ref={ref}>
          <Loader loadingLabel={'loading oompas'} />
        </div>
      )}
    </section>
  );
};

export default OompaList;
