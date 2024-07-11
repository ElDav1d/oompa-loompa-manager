import { useState } from 'react';
import {
  DEBOUNCE_DELAY_FILTER_LIST,
  LITERAL_FILTER_LIST_IMG_ALT,
  LITERAL_FILTER_LIST_IMG_TITLE,
  LITERAL_FILTER_LIST_LABEL,
  LITERAL_FILTER_LIST_PLACEHOLDER,
  RESOURCE_URL_FILTER_LIST_ICON,
} from '../../utils/constants';
import { useFilterListActions } from './hooks';
import { useDebounce } from '../../hooks';

const FilterInput = () => {
  const { setFilterList } = useFilterListActions();
  const [searchString, setSearchString] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  useDebounce(searchString, DEBOUNCE_DELAY_FILTER_LIST, () => {
    setFilterList({
      filterString: searchString,
    });
  });

  return (
    <div className='w-full p-2 flex justify-between items-center border border-secondary rounded-lg sm:w-auto'>
      <input
        className='w-full'
        type='text'
        aria-label={LITERAL_FILTER_LIST_LABEL}
        placeholder={LITERAL_FILTER_LIST_PLACEHOLDER}
        onChange={handleChange}
      />
      <img
        className='w-4 ml-2 border-secondary border-l-2'
        src={RESOURCE_URL_FILTER_LIST_ICON}
        title={LITERAL_FILTER_LIST_IMG_ALT}
        alt={LITERAL_FILTER_LIST_IMG_TITLE}
      />
    </div>
  );
};

export default FilterInput;
