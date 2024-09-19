import { IOompaListItem, IOompaList } from '../../list/interfaces/oompaList';

const isValidKey = (key: keyof IOompaListItem) =>
  key === 'id' ||
  key === 'first_name' ||
  key === 'gender' ||
  key === 'profession' ||
  key === 'image';

const isValidValue = (key: keyof IOompaListItem, item: IOompaListItem) => {
  switch (key) {
    case 'gender':
      return item.gender === 'M' || item.gender === 'F' || item.gender === '';
    default:
      return typeof item[key] === 'string';
  }
};

const isValidOompaListItem = (item: IOompaListItem) => {
  for (const key in item) {
    if (!isValidKey(key as keyof IOompaListItem)) {
      console.error(`Invalid Oompa List Item Property: ${key}`);
      return;
    } else if (!isValidValue(key as keyof IOompaListItem, item)) {
      console.error(`Invalid Oompa List Item Value: ${key} : ${item[key as keyof IOompaListItem]}`);
      return;
    } else {
    }
  }
  return true;
};

export const isValidOompaList = (data: IOompaList) => {
  return (
    typeof data.current_page === 'number' &&
    Array.isArray(data.items) &&
    data.items.every(isValidOompaListItem)
  );
};
