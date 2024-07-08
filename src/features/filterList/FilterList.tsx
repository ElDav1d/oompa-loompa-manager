import { useState } from 'react';
import {
  DEBOUNCE_DELAY_FILTER_LIST,
  LITERAL_FILTER_LIST_LABEL,
  LITERAL_FILTER_LIST_PLACEHOLDER,
} from '../../utils/constants';
import { useFilterListActions } from './hooks';
import { useDebounce } from '../../hooks';

const Search = () => {
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
    <input
      type='text'
      aria-label={LITERAL_FILTER_LIST_LABEL}
      placeholder={LITERAL_FILTER_LIST_PLACEHOLDER}
      onChange={handleChange}
    />
  );
};

export default Search;
