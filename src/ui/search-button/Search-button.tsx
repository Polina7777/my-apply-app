import React from 'react';
import { SearchButtonProps } from './Search-button-interface';
import './Search-button.css';

export const SearchButton: React.FunctionComponent<SearchButtonProps> = () => {
  return <button className="search-button">Search</button>;
};
export default SearchButton;
