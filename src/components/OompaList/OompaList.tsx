import { useAppSelector } from '../../hooks';

const OompaList = () => {
  const oompaList = useAppSelector((state) => state.oompaList.results);

  return (
    <ul>
      {oompaList?.map(({ id, image, first_name, gender, profession }) => (
        <li key={id}>
          <img src={image} alt={first_name} title={first_name} />
          <h3>{first_name}</h3>
          <p>{gender}</p>
          <p>{profession}</p>
        </li>
      ))}
    </ul>
  );
};

export default OompaList;
