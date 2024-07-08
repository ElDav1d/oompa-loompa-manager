import { useParams } from 'react-router-dom';
import { HumanizedGender } from '../../features/list/interfaces/oompaList';
import { useEffect } from 'react';
import { Loader } from '../../ui/Loader';
import { useAppSelector } from '../../hooks';
import { useOompaDetail, useOompaDetailActions } from './hooks';
import { LITERAL_DETAIL_ERROR_MESSAGE, LITERAL_DETAIL_LOADING } from '../../utils/constants';

const OompaDetail = () => {
  const { oompaId } = useParams();
  const { first_name } = useAppSelector((state) => state.oompaList.itemStamp);
  const oompaDetail = useAppSelector((state) => state.oompaDetail);
  const { setOompaDetail } = useOompaDetailActions();

  const { isLoading, isError, fetchedOompaDetail } = useOompaDetail(oompaId);

  useEffect(() => {
    if (oompaId && !isLoading && fetchedOompaDetail) {
      setOompaDetail({
        ...fetchedOompaDetail,
      });
    }
  }, [oompaId, isLoading, fetchedOompaDetail]);

  return (
    <>
      {isLoading && <Loader loadingLabel={`${LITERAL_DETAIL_LOADING} ${first_name}`} />}

      {isError && <p>{`${LITERAL_DETAIL_ERROR_MESSAGE} ${first_name}`}</p>}

      {fetchedOompaDetail && (
        <article className='flex'>
          <img src={oompaDetail.image} alt={oompaDetail.last_name} title={oompaDetail.last_name} />
          <section>
            <h3 className='text-1xl'>{first_name}</h3>
            <h4>{HumanizedGender[oompaDetail.gender]}</h4>
            <h4>{oompaDetail.profession}</h4>
            <p>{oompaDetail.description}</p>
          </section>
        </article>
      )}
    </>
  );
};

export default OompaDetail;
