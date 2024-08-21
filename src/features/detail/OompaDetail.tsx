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

  const oompaDetail = useAppSelector((state) => state.oompaDetail);

  const firstName = () => {
    const currentItem = item_stamps.find((item: IItemStamp) => item.id === oompaId);
    return currentItem?.first_name;
  };

  return (
    <>
      {isLoading && !oompaDetail && (
        <div className='flex align-middle'>
          <Loader loadingLabel={`${LITERAL_DETAIL_LOADING} ${firstName()}`} />
        </div>
      )}

      {isError && <p>{`${LITERAL_DETAIL_ERROR_MESSAGE} ${firstName()}`}</p>}
      {oompaDetail && (
        <Container element='section' className='md:flex md:gap-6'>
          <img
            className='mb-4 md:mb-0 md:w-55vw'
            src={oompaDetail.image}
            alt={firstName()}
            title={firstName()}
          />
          <div>
            <div className='mb-2 md:mb-8'>
              <h3 className='text-xl'>
                <b>{firstName()}</b>
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
