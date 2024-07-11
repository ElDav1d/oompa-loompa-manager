import { URL_BASE } from '../../../utils/constants';

const getOompaList = async ({ pageParam = 1 }) => {
  const url = `${URL_BASE}?page=${pageParam}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const getNextCursor = () => {
      const hasMorePages = data.current < data.total;
      return hasMorePages ? pageParam + 1 : null;
    };

    return { data, nextCursor: getNextCursor() };
  } catch (error) {
    console.error('Error fetching oompa list', error);
  }
};

export default getOompaList;
