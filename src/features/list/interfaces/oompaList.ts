export interface IOompaListPage {
  current: number;
  total: number;
  results: IOompaListItem[];
}

export interface IOompaList {
  current_page: number | undefined;
  items: IOompaListItem[];
}

export interface IOompaListStamp {
  fetching_date: string;
}

export interface IOompaListWithStamp extends IOompaList, IOompaListStamp {}

export interface IItemStamp {
  first_name: string;
  id: string;
}

export interface IOompaListItem extends IItemStamp {
  gender: Gender;
  profession: string;
  image: string;
}

export interface IItemDetail extends IItemStamp {
  fetching_date: string;
  gender: Gender;
  description: string;
  image: string;
  profession: string;
}

export interface IOompaListWithDetails extends IOompaListWithStamp {
  details: IItemStamp[];
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
