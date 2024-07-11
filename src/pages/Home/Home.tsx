import { Header } from '../../ui/Header';
import { OompaList } from '../../features/list';
import { NavigationMain } from '../../features/navigation';
import { LITERAL_LIST_HEADING, LITERAL_LIST_SUBHEADING } from '../../utils/constants';
import { FilterInput } from '../../features/filterList';
import { Container } from '../../ui/Container';

const Home = () => {
  return (
    <>
      <Header>
        <NavigationMain />
        <Container element={'div'} className='flex justify-end'>
          <FilterInput />
        </Container>
        <h1 className='text-center text-2xl'>{LITERAL_LIST_HEADING}</h1>
        <h2 className='text-center text-xl'>{LITERAL_LIST_SUBHEADING}</h2>
      </Header>
      <main>
        <OompaList />
      </main>
    </>
  );
};

export default Home;
