import { URL_BASE } from '../../../utils/constants';

const getOompaListNEW = async (page: number) => {
  const url = `${URL_BASE}?page=${page}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching oompa list', error);
  }
};

export default getOompaListNEW;
