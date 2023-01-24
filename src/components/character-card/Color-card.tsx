import React from 'react';
import { ColorCardProps } from './Color-card-interface';
import './Color-card.css';

export const ColorCard: React.FunctionComponent<ColorCardProps> = (props) => {
  return (
    <div className="color_card">
      <div
        // onClick={props.getCharacterFilterById}
        aria-label="filtered-click"
        className="color_info_wrapper"
      >
         {/* <div className='color_img' style={{ backgroundColor:props.color,height: 130,
    width: 130,borderRadius:21}}></div> */}
         {/* <div className='color_info'> */}
        <h1 className="name" style={{ backgroundColor:props.color,padding:10,borderRadius:10}}>{props.id}. {props.name}</h1>
        {/* <p className="color">
         
          <strong>Color:</strong> {props.color}
        </p> */}
        {/* <p className="pantone">
          <strong>Pantone:</strong>
          {props.pantone_value}
        </p> */}
        <p className="year"  style={{ backgroundColor:props.color,padding:10,borderRadius:10}}>
          <strong>Year:</strong> {props.year}
        </p>
        </div>
    {/* </div> */}
    </div>
  );
};
export default ColorCard;
