import React from 'react';
import { SearchInputProps } from './Search-input-interface';
import './Search-input.css';

export const SearchInput: React.FunctionComponent<SearchInputProps> = (props) => {
  return (
    <input
      aria-label="search-input"
      onChange={(event) => props.handleChange(event.target.value)}
      type="search"
      value={props.value}
      className="search-input"
      placeholder="Search..."
    />
  );
};

export default SearchInput;
