export interface OompaListPage {
  current: number;
  total: number;
  results: OompaListItem[];
}

export interface OompaListItem {
  first_name: string;
  last_name: string;
  favorite: Favorite;
  gender: Gender;
  image: string;
  profession: string;
  email: string;
  age: number;
  country: Country;
  height: number;
  id: number;
}

export type Country = 'Loompalandia';

export interface Favorite {
  color: Color;
  food: Food;
  random_string: string;
  song: string;
}

export type Color = 'red' | 'blue';

export type Food = 'Chocolat' | 'cocoa nuts';

export type Gender = 'F' | 'M';
