import React from "react";
import { ColorCardProps } from "./Color-card-interface";
import "./Color-card.css";

export const ColorCard: React.FunctionComponent<ColorCardProps> = (props) => {
  return (
    <div className="color_card">
      <div
        onClick={props.getColorFilterById}
        aria-label="filtered-click"
        className="color_info_wrapper"
      >
        <h1
          className="name"
          style={{
            backgroundColor: props.color,
            padding: 10,
            borderRadius: 10,
          }}
        >
          {props.id}. {props.name}
        </h1>

        <p
          className="year"
          style={{
            backgroundColor: props.color,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <strong>Year:</strong> {props.year}
        </p>
      </div>
    </div>
  );
};
export default ColorCard;
