import React from 'react';
import { SearchBarProps } from './Search-bar-interface';
import SearchButton from 'api/api-ui/search-button/Search-button';
import SearchInput from 'api/api-ui/search-input/Search-input';
import './Search-bar.css';
import { useAppSelector, useTypedDispatch } from 'store/Hooks';

export const SearchBar: React.FunctionComponent<SearchBarProps> = () => {
  const data = useAppSelector((state) => state.info);
  const dispatch = useTypedDispatch();
  const dispatchHandler = (value: string) => {
    dispatch({ type: 'updateString', payload: value });
  };
  return (
    <div className="search-bar">
      <SearchInput value={data.api.searchString} handleChange={dispatchHandler} />
      <SearchButton />
    </div>
  );
};
