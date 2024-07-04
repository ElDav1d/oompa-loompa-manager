import { Country, IFavorite, Gender } from '../../OompaList/interfaces/oompaList';

export interface IOompaDetail {
  last_name: string;
  description: string;
  image: string;
  profession: string;
  quota: string;
  height: number;
  first_name: string;
  country: Country;
  age: number;
  favorite: IFavorite;
  gender: Gender;
  email: string;
}
