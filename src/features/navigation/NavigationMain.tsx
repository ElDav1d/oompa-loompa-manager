import { Link } from 'react-router-dom';
import { Container } from '../../ui/Container';
import {
  LITERAL_NAVIGATION_MAIN_FAKE_HEADING,
  LITERAL_NAVIGATION_MAIN_IMG_TITLE,
  LITERAL_NAVIGATION_MAIN_LABEL,
  PATH_BASE,
  RESOURCE_URL_NAVIGATION_MAIN_ICON,
} from '../../utils/constants';
import styles from './NavigationMain.module.css';

const NavigationMain = () => (
  <div className={styles.background}>
    <Container element='nav' className={styles.container}>
      <Link to={PATH_BASE} className={styles.link} aria-label={LITERAL_NAVIGATION_MAIN_LABEL}>
        <img
          className={styles.icon}
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
