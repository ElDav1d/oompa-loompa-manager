import { useAppSelector } from '../../hooks';
import { HumanizedGender } from './interfaces/oompaList';

const OompaList = () => {
  const oompaList = useAppSelector((state) => state.oompaList.results);

  return (
    <section>
      <ul>
        {oompaList?.map(({ id, image, first_name, gender, profession }) => (
          <li key={id}>
            <img src={image} alt={first_name} title={first_name} />
            <h3>{first_name}</h3>
            <p>{HumanizedGender[gender]}</p>
            <p>{profession}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OompaList;
