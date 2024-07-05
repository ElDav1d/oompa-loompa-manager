import { Link } from 'react-router-dom';

const NavigationMain = () => (
  <nav>
    <ul className='flex justify-between'>
      <li>
        <Link className='underline' to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link className='underline' to='/detail'>
          Detail
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavigationMain;
