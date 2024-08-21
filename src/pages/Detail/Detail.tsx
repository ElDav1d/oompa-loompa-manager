import { OompaDetail } from '../../features/detail';
import { NavigationMain } from '../../features/navigation';
import { Header } from '../../ui/Header';
import styles from './Detail.module.css';

const Detail = () => {
  return (
    <>
      <Header className={styles.header}>
        <NavigationMain />
      </Header>
      <main>
        <OompaDetail />
      </main>
    </>
  );
};

export default Detail;
