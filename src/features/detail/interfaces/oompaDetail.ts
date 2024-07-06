import { IOompaListItem } from '../../../features/list/interfaces/oompaList';

export type IOompaDetail = Omit<IOompaListItem, 'id' | 'first_name'> & {
  description: string;
  quota: string;
};
