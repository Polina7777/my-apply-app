import React, { useEffect, useState } from "react";

import { CardsProps } from "./Cards-interface";
import "./Cards.css";

import { useAppSelector, useAsyncTypedDispatch } from "store/Hooks";
import { actionClearAll, actionGetAllColors } from "store/Actions";
import { AsyncDispatch } from "store/Store";
import ColorCard from "components/character-card/Color-card";
import Loader from "ui/loader/Loader";
import { ColorData } from "store/Use-reducer";

export const Cards: React.FunctionComponent<CardsProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [maxPage, setMaxPage] = useState(1);

  const info = useAppSelector((state) => state.info);
  const thunkDispatch = useAsyncTypedDispatch();

  const getColorListFromServer = () => {
    return async (dispatch: AsyncDispatch) => {
      await fetch(`https://reqres.in/api/products`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          if (!data.error) {
            // setMaxPage(data.info.pages);
            dispatch(actionGetAllColors(data.data));
            setIsLoading(false);
          } else {
            setIsLoading(false);
            dispatch(actionClearAll());
          }
        });
    };
  };

  const onGetColorListFromServer = () => {
    thunkDispatch(getColorListFromServer());
  };

  useEffect(() => {
    setIsLoading(true);
    const handler = setTimeout(() => {
      onGetColorListFromServer();
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, []);

  if (isLoading) {
    return <Loader aria-label="character-card-loader" />;
  }

  return (
    // <Pagination
    //   aria-label="character-card-pagination"
    //   page={info.api.page}
    //   isLoading={isLoading}
    //   maxPage={maxPage}
    // >
    <div>
    
      <div id="card" className={info.colors.length ? "cards-full" : "cards"}>
        {info.colors.map((item:ColorData, index: number) => (
          <ColorCard
            aria-label="character-card"
            // getColorFilterById={() => {
            //   props.getColorFilterById(item.id);
            // }}
            id={item.id}
            year={item.year}
            color={item.color}
            pantone_value={item.pantone_value}
            name={item.name}
            key={index}
          />
        ))}
      </div>
      {/* <Pages page={info.api.page} maxPage={maxPage} /> */}
    </div>
    // </Pagination>
  );
};

export default Cards;
