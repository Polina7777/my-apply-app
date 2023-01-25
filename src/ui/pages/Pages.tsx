import React from 'react';
import { useAppSelector, useTypedDispatch } from 'store/Hooks';
// import { useAppSelector, useTypedDispatch } from 'store/Hooks';
import { PagesProps } from './Pages-interface';
import './Pages.css';

export const Pages: React.FunctionComponent<PagesProps> = (props) => {
  const data = useAppSelector((state) => state.info);
  const dispatch = useTypedDispatch();

  return (
    <div className="pages">
      <p className="pages-number">
        {`${data.page} from ${props.maxPage}  `}
        </p>
    </div>
  );
};
export default Pages;
