import { useParams } from 'react-router-dom';
import { HumanizedGender } from '../../features/list/interfaces/oompaList';
import { useEffect, useState } from 'react';
import { IOompaDetail } from './interfaces/oompaDetail';
import { getOompaDetail } from './services';
import { Loader } from '../../ui/Loader';

const OompaDetail = () => {
  const [oompaDetail, setOompaDetail] = useState<IOompaDetail | null>(null);
  const { oompaId } = useParams();

  useEffect(() => {
    getOompaDetail(oompaId).then((res) => setOompaDetail(res));
  }, [oompaId]);

  return (
    <>
      {oompaDetail ? (
        <>
          <article className='flex'>
            <img
              src={oompaDetail.image}
              alt={oompaDetail.last_name}
              title={oompaDetail.last_name}
            />
            <section>
              <h3 className='text-1xl'>{oompaDetail.last_name}</h3>
              <h4>{HumanizedGender[oompaDetail.gender]}</h4>
              <h4>{oompaDetail.profession}</h4>
              <p>{oompaDetail.description}</p>
            </section>
          </article>
        </>
      ) : (
        <Loader loadingLabel='loading NAME?' />
      )}
    </>
  );
};

export default OompaDetail;
