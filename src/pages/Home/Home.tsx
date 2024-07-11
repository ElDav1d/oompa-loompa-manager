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
      </Header>
      <main>
        <Container className='flex justify-end mb-4 md:mb-8'>
          <FilterInput />
        </Container>
        <Container className='text-center mb-4 sm:mb-8 md:mb-16'>
          <h1 className='text-2xl sm:text-4xl sm:mb-1 md:text-5xl'>{LITERAL_LIST_HEADING}</h1>
          <h2 className='text-xl sm:text-2xl text-gray-500 md:text-4xl'>
            {LITERAL_LIST_SUBHEADING}
          </h2>
        </Container>
        <OompaList />
      </main>
    </>
  );
};

export default Home;
