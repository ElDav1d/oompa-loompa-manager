import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 className='text-3xl font-bold'>OOMPA-LOOMPA MANAGER</h1>
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
    </header>
  );
};

export default Header;
