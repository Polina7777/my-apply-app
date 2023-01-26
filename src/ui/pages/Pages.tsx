import React from 'react';
import { useAppSelector, useTypedDispatch } from 'store/Hooks';
// import { useAppSelector, useTypedDispatch } from 'store/Hooks';
import { PagesProps } from './Pages-interface';
import './Pages.css';

export const Pages: React.FunctionComponent<PagesProps> = (props) => {
  const data = useAppSelector((state) => state.info);

  return (
    <div className="pages">
      <p className="pages-number">
        {data.colors.length > 4 || data.colors.length !== 1 ? `${data.page} from ${data.maxPage}`:`1 from 1`}
        </p>
    </div>
  );
};
export default Pages;
