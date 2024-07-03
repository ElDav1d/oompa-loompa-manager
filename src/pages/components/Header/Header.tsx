import { Link } from 'react-router-dom';

export interface IHeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: IHeaderProps) => {
  return (
    <header>
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
      {children}
    </header>
  );
};

export default Header;
