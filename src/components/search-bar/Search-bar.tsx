import SearchInput from '../../ui/search-input/Search-input';
import './Search-bar.css';
import { useAppSelector, useTypedDispatch } from 'store/Hooks';


const SearchBar = () => {
  const data = useAppSelector((state) => state.info);
  const dispatch = useTypedDispatch();
  const dispatchHandler = (value: string) => {
    dispatch({ type: 'getSearchString', payload: value });
  };
  return (
    <div className="search-bar">
      <SearchInput  handleChange={dispatchHandler} value={data.searchString} />
    </div>
  );
};
export default SearchBar;