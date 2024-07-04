import { Header } from '../../components/Header';
import { OompaDetail } from '../../components/OompaDetail';

const Detail = () => {
  return (
    <>
      <Header>
        <h2 className='text-2xl'>Detail</h2>
      </Header>
      <main>
        <OompaDetail />
      </main>
    </>
  );
};

export default Detail;
