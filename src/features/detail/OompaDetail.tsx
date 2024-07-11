import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { useOompaDetail } from './hooks';
import { LITERAL_DETAIL_ERROR_MESSAGE, LITERAL_DETAIL_LOADING } from '../../utils/constants';
import { humanizeGender } from '../../utils';
import { Container } from '../../ui/Container';
import { Loader } from '../../ui/Loader';
import { ItemSubheading } from '../../ui/ItemSubheading';
import interpreteMarkup from '../../utils/interpreteHtml';

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
        <Container element='section' className='md:flex md:gap-6'>
          <img
            className='mb-4 md:mb-0 md:w-55vw'
            src={oompaDetail.image}
            alt={first_name}
            title={first_name}
          />
          <div>
            <div className='mb-2 md:mb-8'>
              <h3 className='text-xl'>
                <b>{first_name}</b>
              </h3>
              <ItemSubheading
                subHeading={humanizeGender(oompaDetail.gender)}
                paragraph={oompaDetail.profession}
              />
            </div>
            <p dangerouslySetInnerHTML={interpreteMarkup(oompaDetail.description)}></p>
          </div>
        </Container>
      )}
    </>
  );
};

export default OompaDetail;
