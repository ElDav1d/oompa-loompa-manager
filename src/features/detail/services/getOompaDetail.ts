import { URL_BASE } from '../../../utils/constants';
import { OompaDetail } from '../interfaces/oompaDetail';

const getOompaDetail = async (oompaId: string | undefined): Promise<OompaDetail | undefined> => {
  const url = `${URL_BASE}/${oompaId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP STATUS: ${response.status}`);
    }

    const res = await response.json();

    const { gender, description, image, profession }: OompaDetail = res;

    return { gender, description, image, profession };
  } catch (error) {
    console.log('Error fetching oompa detail:', error);
  }
};

export default getOompaDetail;
