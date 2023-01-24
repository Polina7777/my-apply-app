import React from 'react';
// import { useAppSelector, useTypedDispatch } from 'store/Hooks';
import { PagesProps } from './Pages-interface';
import './Pages.css';

export const Pages: React.FunctionComponent<PagesProps> = (props) => {
  // const data = useAppSelector((state) => state.info);
  // const dispatch = useTypedDispatch();
  const dispatchHandler = (value: MouseEvent | string) => {
    // dispatch({ type: 'changePage', payload: Number(value) });
    console.log('pages')
  };

  return (
    <div className="pages">
      <p className="pages-number">
        {/* {`${data.api.page} from ${props.maxPage}  `} */}
        </p>
      <input
        type="search"
        name="page"
        className="set-page"
        onChange={(event) => dispatchHandler(event.target.value)}
        placeholder={'page'}
      ></input>
    </div>
  );
};
export default Pages;
