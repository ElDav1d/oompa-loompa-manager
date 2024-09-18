import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { useOompaDetail } from './hooks';
import { LITERAL_DETAIL_ERROR_MESSAGE, LITERAL_DETAIL_LOADING } from '../../utils/constants';
import { humanizeGender } from '../../utils';
import { Container } from '../../ui/Container';
import { Loader } from '../../ui/Loader';
import { ItemSubheading } from '../../ui/ItemSubheading';
import interpreteMarkup from '../../utils/interpreteHtml';
import { IItemStamp } from '../list/interfaces/oompaList';

const OompaDetail = () => {
  const { oompaId } = useParams();
  const item_stamps = useAppSelector((state) => state.oompaList.item_stamps);
  const { isLoading, isError } = useOompaDetail(oompaId);

  const { first_name, image, gender, profession, description } = item_stamps.find(
    (stamp: IItemStamp) => stamp.id === oompaId,
  );

  return (
    <>
      {isLoading && (
        <div className='flex align-middle'>
          <Loader loadingLabel={`${LITERAL_DETAIL_LOADING} ${first_name}`} />
        </div>
      )}

      {isError && <p>{`${LITERAL_DETAIL_ERROR_MESSAGE} ${first_name}`}</p>}

      {!isLoading && (
        <Container element='section' className='md:flex md:gap-6'>
          <img className='mb-4 md:mb-0 md:w-55vw' src={image} alt={first_name} title={first_name} />
          <div>
            <div className='mb-2 md:mb-8'>
              <h3 className='text-xl'>
                <b>{first_name}</b>
              </h3>
              <ItemSubheading subHeading={humanizeGender(gender)} paragraph={profession} />
            </div>
            <p dangerouslySetInnerHTML={interpreteMarkup(description)}></p>
          </div>
        </Container>
      )}
    </>
  );
};

export default OompaDetail;
