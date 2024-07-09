import { useMemo } from 'react';

interface IUseFilterListProps<T> {
  items: T[];
  filterString: string;
  filterProperties: (keyof T)[];
}

const useFilterList = <T extends Record<string, any>>({
  items,
  filterString,
  filterProperties,
}: IUseFilterListProps<T>): T[] => {
  const filteredItems: T[] = useMemo(() => {
    const cleanString = filterString.trim();

    if (!cleanString) return items;

    return items.filter((item) =>
      filterProperties.some((property) =>
        item[property].toLowerCase().includes(cleanString.toLowerCase()),
      ),
    );
  }, [items, filterString, filterProperties]);

  return filteredItems;
};

export default useFilterList;
