import { Header } from '../../ui/Header';
import { OompaList } from '../../features/list';
import { NavigationMain } from '../../features/navigation';

const Home = () => {
  return (
    <>
      <Header>
        <NavigationMain />
        <h1 className='text-center text-2xl'>Find your Oompa Loompa</h1>
        <h2 className='text-center text-xl'>There are more than 100</h2>
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
