import React from 'react';
import { useAppSelector, useTypedDispatch } from 'store/Hooks';
import { PaginationProps } from './Pagination-interface';
import './Pagination.css';
export const Pagination: React.FunctionComponent<PaginationProps> = (props) => {
  const data = useAppSelector((state) => state.info);
  const dispatch = useTypedDispatch();

  const dispatchHandler = (value: number) => {
    dispatch({ type: 'changePage', payload: value });
  };
  const toRight = () => {
    dispatchHandler(data.page + 1);
  };
  const toLeft = () => {
    if (data.page > 1) {
      dispatchHandler(data.page - 1);
    }
  };

  return (
    <div className={'pagination'}>
      <div
        aria-label="left"
        className={data.page > 1 ? 'arrow arrow-left' : 'arrow arrow-left-not-visible'}
        onClick={() => toLeft()}
      >
        {'<'}
      </div>

      {props.children}

      <div
        className={
          data.page !== props.maxPage ? 'arrow arrow-right' : 'arrow arrow-right-not-visible'
        }
        aria-label="right"
        onClick={() => toRight()}
      >
        {'>'}
      </div>
    </div>
  );
};
export default Pagination;
