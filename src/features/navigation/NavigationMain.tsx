import { Link } from 'react-router-dom';

const NavigationMain = () => (
  <nav>
    <ul className='flex justify-between'>
      <li>
        <Link className='underline' to='/'>
          Home
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavigationMain;
