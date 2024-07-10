export interface IOompaListPage {
  current: number;
  total: number;
  results: IOompaListItem[];
}

export interface IOompaList {
  feching_date: string;
  oompas: IOompaListItem[];
}

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

export interface INewItemStamp {
  first_name: string;
}

export interface IItemStampUpdate {
  fetching_date: string;
  id: string;
}

export interface IUpdatedItemStamp extends INewItemStamp, IItemStampUpdate {}

export interface IOompaListWithItemStamp extends IOompaList {
  item_stamp: IUpdatedItemStamp;
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
