import { Header } from '../../components/Header';
import { OompaList } from '../../components/OompaList';

const Home = () => {
  return (
    <>
      <Header>
        <>
          <h1 className='text-center text-2xl'>Find your Oompa Loompa</h1>
          <h2 className='text-center text-xl'>There are more than 100</h2>
        </>
      </Header>
      <main>
        <section>
          <OompaList />
        </section>
      </main>
    </>
  );
};

export default Home;
