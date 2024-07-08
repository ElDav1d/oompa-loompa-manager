import { useState } from 'react';
import { LITERAL_FILTER_LIST_LABEL, LITERAL_FILTER_LIST_PLACEHOLDER } from '../../utils/constants';

const Search = () => {
  const [searcInput, setSearcInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearcInput(e.target.value);
  };

  console.log(searcInput);

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
