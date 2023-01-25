// import { AnyAction } from '@reduxjs/toolkit';

import { AnyAction } from "redux";

export interface ColorData {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}

export interface AppContext {
  colors: ColorData[];
}
export type SliceState = {
  colors: ColorData[];
  color: ColorData;
  searchString:'';
  page:number
};
export const initialState = {
  colors: [],
  color: {},
  searchString:'',
  page:1
} as unknown as SliceState;

export const SecondReducer = (state = initialState, action: AnyAction) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case "getAllColors":
      return { ...state, colors: action.payload };
      case "getColorById":
        return { ...state, color: action.payload };
        case "getSearchString":
          return { ...state, searchString: action.payload };
          case "changePage":
            return { ...state, page: action.payload };

    // case "getCharacter":
    //   return {
    //     ...state,
    //     characterArray: { ...state.api, characterArray: action.payload },
    //   };
    // case "filterByGender":
    //   return {
    //     ...state,
    //     api: { ...state.api, filterByGender: action.payload },
    //   };
    // case "filterBySpecies":
    //   return {
    //     ...state,
    //     api: { ...state.api, filterBySpecies: action.payload },
    //   };
    // case "filterByStatus":
    //   return {
    //     ...state,
    //     api: { ...state.api, filterByStatus: action.payload },
    //   };
    // case " clearAll":
    //   return { ...state, api: initialState.api };
    default:
      return state;
  }
};
