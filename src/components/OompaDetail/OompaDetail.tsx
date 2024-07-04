import { useAppSelector } from '../../hooks';
import { HumanizedGender } from '../OompaList/interfaces/oompaList';

const OompaDetail = () => {
  const { image, last_name, gender, profession, description } = useAppSelector(
    (state) => state.oompaDetail,
  );

  return (
    <article className='flex'>
      <img src={image} alt={last_name} title={last_name} />
      <section>
        <h3 className='text-1xl'>{last_name}</h3>
        <h4>{HumanizedGender[gender]}</h4>
        <h4>{profession}</h4>
        <p>{description}</p>
      </section>
    </article>
  );
};

export default OompaDetail;
