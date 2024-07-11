import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { useOompaDetail } from './hooks';
import { LITERAL_DETAIL_ERROR_MESSAGE, LITERAL_DETAIL_LOADING } from '../../utils/constants';
import { humanizeGender } from '../../utils';
import { Container } from '../../ui/Container';
import { Loader } from '../../ui/Loader';

const OompaDetail = () => {
  const { oompaId } = useParams();
  const { first_name } = useAppSelector((state) => state.oompaList.item_stamp);
  const { isLoading, isError, oompaDetail } = useOompaDetail(oompaId);

  return (
    <>
      {isLoading && (
        <div className='flex align-middle'>
          <Loader loadingLabel={`${LITERAL_DETAIL_LOADING} ${first_name}`} />
        </div>
      )}

      {isError && <p>{`${LITERAL_DETAIL_ERROR_MESSAGE} ${first_name}`}</p>}

      {oompaDetail && (
        <Container element='section' className='flex'>
          <img src={oompaDetail.image} alt={first_name} title={first_name} width={500} />
          <div>
            <h3 className='text-1xl'>{first_name}</h3>
            <h4>{humanizeGender(oompaDetail.gender)}</h4>
            <h4>{oompaDetail.profession}</h4>
            <p>{oompaDetail.description}</p>
          </div>
        </Container>
      )}
    </>
  );
};

export default OompaDetail;
