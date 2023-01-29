import React, { ReactNode } from "react";
import { useAppSelector } from "store/Hooks";
import "./Loader.css";

export const Loader: React.FunctionComponent<{children:ReactNode}> = ({children}) => {
  const info = useAppSelector((state) => state.info);
  return (
    <div>
      {info.isLoading ? (
        <div className="loader">
          <div className="circle"></div>
        </div>
      ) : null}

      {children}
    </div>
  );
};

export default Loader;
