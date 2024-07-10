import { useParams } from 'react-router-dom';
import { Loader } from '../../ui/Loader';
import { useAppSelector } from '../../hooks';
import { useOompaDetail } from './hooks';
import { LITERAL_DETAIL_ERROR_MESSAGE, LITERAL_DETAIL_LOADING } from '../../utils/constants';
import { humanizeGender } from '../../utils';

const OompaDetail = () => {
  const { oompaId } = useParams();
  const { first_name } = useAppSelector((state) => state.oompaList.item_stamp);
  const { isLoading, isError, oompaDetail } = useOompaDetail(oompaId);

  return (
    <>
      {isLoading && <Loader loadingLabel={`${LITERAL_DETAIL_LOADING} ${first_name}`} />}

      {isError && <p>{`${LITERAL_DETAIL_ERROR_MESSAGE} ${first_name}`}</p>}

      {oompaDetail && (
        <article className='flex'>
          <img src={oompaDetail.image} alt={first_name} title={first_name} width={500} />
          <section>
            <h3 className='text-1xl'>{first_name}</h3>
            <h4>{humanizeGender(oompaDetail.gender)}</h4>
            <h4>{oompaDetail.profession}</h4>
            <p>{oompaDetail.description}</p>
          </section>
        </article>
      )}
    </>
  );
};

export default OompaDetail;
