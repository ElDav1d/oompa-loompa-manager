import { Country, Favorite, Gender } from '../../OompaList/interfaces/oompaList';

export interface OompaDetail {
  last_name: string;
  description: string;
  image: string;
  profession: string;
  quota: string;
  height: number;
  first_name: string;
  country: Country;
  age: number;
  favorite: Favorite;
  gender: Gender;
  email: string;
}
