import React, { useEffect } from "react";
import { CardsProps } from "./Cards-interface";
import { useAppSelector, useAsyncTypedDispatch } from "store/Hooks";
import { actionSetIsLoading } from "store/Actions";
import ColorCard from "components/color-card/Color-card";
import { ColorData } from "store/Use-reducer";
import Pagination from "ui/pagination/Pagination";
import Pages from "ui/pages/Pages";
import ErrorPage from "layout/error-page/Error-page";
import { useDispatch } from "react-redux";
import api from "services/api";
import "./Cards.css";

export const Cards: React.FunctionComponent<CardsProps> = (props) => {
  const info = useAppSelector((state) => state.info);
  const thunkDispatch = useAsyncTypedDispatch();
  const dispatch = useDispatch();

  const onGetColorListFromServer = () => {
    thunkDispatch(api.getColorList(info));
  };

  useEffect(() => {
    dispatch(actionSetIsLoading(true));
    const handler = setTimeout(() => {
      onGetColorListFromServer();
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [info.page, info.searchString]);

  return !info.errorPage ? (
    <Pagination
      aria-label="color-card-pagination"
      page={info.page}
      maxPage={info.maxPage}
    >
      <div
        id="card"
        className="cards-full"
      >
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
