import { Link, useNavigate } from 'react-router-dom';
import { Gender, HumanizedGender } from './interfaces/oompaList';
import { useOompaListActions } from './hooks';

export interface IOompaListItemProps {
  id: string;
  image: string;
  first_name: string;
  last_name: string;
  gender: Gender;
  profession: string;
}

const OompaListItem = ({
  id,
  image,
  first_name,
  last_name,
  gender,
  profession,
}: IOompaListItemProps) => {
  const navigate = useNavigate();

  const { setOompaItemStamp } = useOompaListActions();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setOompaItemStamp({
      first_name,
    });

    navigate(`/${id}`);
  };

  return (
    <li className='bg-slate-500 mb-2'>
      <Link to={`/${id}`} onClick={handleClick}>
        <img src={image} alt={first_name} title={first_name} width={200} />
        <h3>
          {first_name} {last_name}
        </h3>
        <p>{gender && HumanizedGender[gender]}</p>
        <p>{profession}</p>
      </Link>
    </li>
  );
};
export default OompaListItem;
