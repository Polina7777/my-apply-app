import React, { useEffect, useState } from "react";

import { CardsProps } from "./Cards-interface";
import "./Cards.css";

import { useAppSelector, useAsyncTypedDispatch } from "store/Hooks";
import { actionGetAllColors, actionSetMaxPage } from "store/Actions";
import { AsyncDispatch } from "store/Store";
import ColorCard from "components/color-card/Color-card";
import Loader from "ui/loader/Loader";
import { ColorData } from "store/Use-reducer";
import Pagination from "ui/pagination/Pagination";
import Pages from "ui/pages/Pages";
import ErrorPage from "layout/error-page/Error-page";

export const Cards: React.FunctionComponent<CardsProps> = (props) => {
  // window.location.pathname= 'colors';
  const info = useAppSelector((state) => state.info);
  const thunkDispatch = useAsyncTypedDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const[showErrorPage,setShowErorPage] = useState(false);

  const getColorListFromServer = () => {
    return async (dispatch: AsyncDispatch) => {
      if (!info.searchString) {
        try {
          const responce = await fetch(
            `https://reqres.in/api/products/?page=${info.page}&per_page=5`
          );
          const data = await responce.json();
          dispatch(actionGetAllColors(data.data));
          dispatch(actionSetMaxPage(data.total_pages));
          setIsLoading(false);
          setShowErorPage(false);
        } catch (error) {
          setIsLoading(false);
          return error;
        }
      } else {
        try {
          const responce = await fetch(
            `https://reqres.in/api/products/?id=${info.searchString}&per_page=5`
          );
          const data = await responce.json();
          console.log(new Array(data).length);
          if (Object.keys(data).length !== 0) {
            dispatch(actionSetMaxPage(data.total_pages));
            dispatch(actionGetAllColors(new Array(data)));
            setIsLoading(false);
            setShowErorPage(false);
          }else{
                 setIsLoading(false);
                         setShowErorPage(true);
          }
        } catch (error) {
          setIsLoading(false);
          return error;
        }
      }
    };
  };

  const onGetColorListFromServer = () => {
    thunkDispatch(getColorListFromServer());
  };

  useEffect(() => {
    // window.location.pathname = `colors?page=${info.page} `;
    setIsLoading(true);
    const handler = setTimeout(() => {
      onGetColorListFromServer();
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [info.searchString, info.page, showErrorPage]);

  if (isLoading) {
    return <Loader aria-label="color-card-loader" />;
  }

  return !showErrorPage ? (
    // window.location.href= `https://colors/color/?id=${id}`;

    <Pagination
      aria-label="color-card-pagination"
      page={info.page}
      isLoading={isLoading}
      maxPage={info.maxPage}
    >
      <div id="card" className={info.colors.length ? "cards-full" : "cards"}>
        {info.colors.map((item: ColorData, index: number) => (
          <ColorCard
            aria-label="character-card"
            getColorFilterById={() => {
              props.getColorFilterById(item.id);
            }}
            id={item.id}
            year={item.year}
            color={item.color}
            name={item.name}
            key={index}
          />
        ))}
      </div>

      <Pages page={info.page} maxPage={info.maxPage} />
    </Pagination>
  ) : (
    <ErrorPage />
  );
};

export default Cards;
