import { URL_BASE } from '../../../utils/constants';

const getOompaDetail = async (oompaId: string | undefined) => {
  const url = `${URL_BASE}/${oompaId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP STATUS: ${response.status}`);
    }

    const res = await response.json();

    return res;
  } catch (error) {
    return error;
  }
};

export default getOompaDetail;
