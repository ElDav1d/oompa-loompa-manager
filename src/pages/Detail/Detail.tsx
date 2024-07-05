import { OompaDetail } from '../../features/detail';
import { NavigationMain } from '../../features/navigation';
import { Header } from '../../ui/Header';

const Detail = () => {
  return (
    <>
      <Header>
        <NavigationMain />
      </Header>
      <main>
        <OompaDetail />
      </main>
    </>
  );
};

export default Detail;
