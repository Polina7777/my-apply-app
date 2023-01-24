import React from 'react';
import { LoaderProps } from './Loader-interface';
import './Loader.css';

export const Loader: React.FunctionComponent<LoaderProps> = () => {
  return (
    <div className="loader">
      <div className="circle"></div>
    </div>
  );
};

export default Loader;
