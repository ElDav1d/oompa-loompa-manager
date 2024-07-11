import { OompaDetail } from '../../features/detail';
import { NavigationMain } from '../../features/navigation';
import { Header } from '../../ui/Header';

const Detail = () => {
  return (
    <>
      <Header className='mb-8 md:mb-24'>
        <NavigationMain />
      </Header>
      <main>
        <OompaDetail />
      </main>
    </>
  );
};

export default Detail;
