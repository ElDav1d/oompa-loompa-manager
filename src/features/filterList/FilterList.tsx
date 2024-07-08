import { LITERAL_FILTER_LIST_LABEL, LITERAL_FILTER_LIST_PLACEHOLDER } from '../../utils/constants';
import { useFilterListActions } from './hooks';

const Search = () => {
  const { setFilterList } = useFilterListActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterList({ filterString: e.target.value });
  };

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
