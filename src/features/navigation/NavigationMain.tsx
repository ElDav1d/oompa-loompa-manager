import { Link } from 'react-router-dom';
import { Container } from '../../ui/Container';
import {
  LITERAL_NAVIGATION_MAIN_FAKE_HEADING,
  LITERAL_NAVIGATION_MAIN_IMG_TITLE,
  LITERAL_NAVIGATION_MAIN_LABEL,
  PATH_BASE,
  RESOURCE_URL_NAVIGATION_MAIN_ICON,
} from '../../utils/constants';

const NavigationMain = () => (
  <div className='bg-secondary mb-4'>
    <Container
      element='nav'
      className='py-2 flex justify-between items-center gap-6 sm:justify-start'
    >
      <Link
        to={PATH_BASE}
        className='flex items-center gap-6'
        aria-label={LITERAL_NAVIGATION_MAIN_LABEL}
      >
        <img
          className='w-6'
          src={RESOURCE_URL_NAVIGATION_MAIN_ICON}
          title={LITERAL_NAVIGATION_MAIN_IMG_TITLE}
          alt={LITERAL_NAVIGATION_MAIN_LABEL}
        />
      </Link>
      <span aria-hidden={true}>
        <b>{LITERAL_NAVIGATION_MAIN_FAKE_HEADING}</b>
      </span>
    </Container>
  </div>
);

export default NavigationMain;
