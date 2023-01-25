import React from 'react';
// import { SearchBarProps } from './Search-bar-interface';
import SearchInput from '../../ui/search-input/Search-input';
import SearchButton from '../../ui/search-button/Search-button';
import './Search-bar.css';
import { useAppSelector, useTypedDispatch } from 'store/Hooks';
// import { useAppSelector, useTypedDispatch } from 'store/Hooks';

const SearchBar = () => {
  const data = useAppSelector((state) => state.info);
  const dispatch = useTypedDispatch();
  const dispatchHandler = (value: string) => {
    dispatch({ type: 'getSearchString', payload: value });
    console.log(value)
  };
  return (
    <div className="search-bar">
      <SearchInput  handleChange={dispatchHandler} value={data.searchString} />
      <SearchButton />
    </div>
  );
};
export default SearchBar;