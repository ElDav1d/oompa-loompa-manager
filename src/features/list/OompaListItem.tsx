import { Link } from 'react-router-dom';
import { Gender, HumanizedGender } from './interfaces/oompaList';

export interface IOompaListItemProps {
  id: number;
  image: string;
  first_name: string;
  gender: Gender;
  profession: string;
}

const OompaListItem = ({ id, image, first_name, gender, profession }: IOompaListItemProps) => (
  <Link to={`/${id}`}>
    <li>
      <img src={image} alt={first_name} title={first_name} />
      <h3>{first_name}</h3>
      <p>{HumanizedGender[gender]}</p>
      <p>{profession}</p>
    </li>
  </Link>
);
export default OompaListItem;
