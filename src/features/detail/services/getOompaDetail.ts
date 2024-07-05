import { BASE_URL } from '../../../utils/constants';

const getOompaDetail = async (oompaId: string | undefined) => {
  const url = `${BASE_URL}/${oompaId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP STATUS: ${response.status}`);
    }

    const res = await response.json();

    return res;
  } catch (error) {
    console.log(error);
  }
};

export default getOompaDetail;
