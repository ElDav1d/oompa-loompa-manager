export interface IOompaListPage {
  current: number;
  total: number;
  results: IOompaListItem[];
}

export interface IOompaList {
  current_page: number | undefined;
  oompas: IOompaListItem[];
}

export interface IOompaListStamp {
  fetching_date: string;
}

export interface IOompaListWithStamp extends IOompaList, IOompaListStamp {}

export interface IOompaListItem {
  first_name: string;
  last_name: string;
  favorite: IFavorite;
  gender: Gender;
  image: string;
  profession: string;
  email: string;
  age: number;
  country: Country;
  height: number;
  id: number;
}

export interface IItemStamp {
  first_name: string;
  id: string;
  fetching_date: string;
}

export interface IOompaListWithItemStamp extends IOompaListWithStamp {
  item_stamps: IItemStamp[];
}

export type Country = 'Loompalandia' | '';

export interface IFavorite {
  color: Color;
  food: Food;
  random_string: string;
  song: string;
}

export type Color = 'red' | 'blue' | '';

export type Food = 'Chocolat' | 'cocoa nuts' | '';

export type Gender = 'F' | 'M' | '';

export enum HumanizedGender {
  'F' = 'Female',
  'M' = 'Male',
  '' = 'N/A',
}
