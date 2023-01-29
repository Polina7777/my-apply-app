import React from "react";
import "./Personal-color-card.css";
import { useAppSelector } from "store/Hooks";
import Portal from "components/portal/Portal";
import { PersonalColorCardProps } from "./Personal-color-card-interface";

export const PersonalColorCard: React.FunctionComponent<
  PersonalColorCardProps
> = (props) => {
  const info = useAppSelector((state) => state.info.color);
  return (
 
    <Portal
      wrapperId={"personal-color-card_wrapper"}
      isOpen={props.isOpen}
      closeHandler={props.closeHandler}
    >
      
      <div className="personal_color_card">
        <div aria-label="filtered-click" className="color_info_wrapper">
          <div
            className="color_img"
            style={{
              backgroundColor: info.color,
              height: 130,
              width: 130,
              borderRadius: 21,
            }}
          ></div>
          <div className="color_info">
            <h1 className="name">
              {info.id}. {info.name}
            </h1>
            <p className="color">
              <strong>Color:</strong> {info.color}
            </p>
            <p className="pantone">
              <strong>Pantone:</strong>
              <a
                className="color_link"
                href="https://www.pantone.com/connect/15-4020-TPX"
              >
                {info.pantone_value}
              </a>
            </p>
            <p className="year">
              <strong>Year:</strong> {info.year}
            </p>
          </div>
        </div>
      </div>
  
    </Portal>

  );
};
export default PersonalColorCard;
