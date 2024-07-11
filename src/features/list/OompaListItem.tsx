import { Link, useNavigate } from 'react-router-dom';
import { Gender, HumanizedGender } from './interfaces/oompaList';
import { useOompaListActions } from './hooks';
import { PATH_BASE } from '../../utils/constants';

export interface IOompaListItemProps {
  id: string;
  image: string;
  first_name: string;
  gender: Gender;
  profession: string;
}

const OompaListItem = ({
  id,
  image,
  first_name,

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
    <li className='mb-8'>
      <img
        src={image}
        alt={first_name}
        title={first_name}
        className='mb-4 object-cover sm:h-27vh md:h-35vh'
      />
      <Link
        to={`${PATH_BASE}/${id}`}
        onClick={handleClick}
        className='inline-block hover:text-primary'
      >
        <h3 className='text-xl'>
          <b>{first_name}</b>
        </h3>
      </Link>
      <p>{gender && HumanizedGender[gender]}</p>
      <p>
        <i>{profession}</i>
      </p>
    </li>
  );
};
export default OompaListItem;
