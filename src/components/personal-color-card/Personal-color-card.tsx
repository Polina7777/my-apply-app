import React from "react";
import "./Personal-color-card.css";
import { useAppSelector } from "store/Hooks";
import { ReactComponent as CloseIcon } from "../../assets/image/close.svg";
import { useNavigate } from "react-router-dom";

export const PersonalColorCard: React.FunctionComponent = (props) => {
  const navigation = useNavigate();
  const info = useAppSelector((state) => state.info.color);
  return (
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
            <a className="color_link" href="https://www.pantone.com/connect/15-4020-TPX">
              {info.pantone_value}
            </a>
          </p>
          <p className="year">
            <strong>Year:</strong> {info.year}
          </p>
        </div>
      </div>

      <CloseIcon
        aria-label="closeModal"
        onClick={() => navigation("/")}
        className="close-icon"
      />
    </div>
  );
};
export default PersonalColorCard;
