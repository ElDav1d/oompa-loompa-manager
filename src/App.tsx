import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PATH_BASE } from './utils/constants';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // de-activated for the purpose of the exercise
      // 24 hours cache can be activated from here
      staleTime: 0,
      retry: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path={PATH_BASE} element={<Home />} />
            <Route path={`${PATH_BASE}:oompaId`} element={<Detail />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
