import { AnyAction } from "redux";

export interface ColorData {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}

export type SliceState = {
  colors: ColorData[];
  color: ColorData;
  searchString: "";
  page: number;
  maxPage: number;
};
export const initialState = {
  colors: [],
  color: {},
  searchString: "",
  page: 1,
  maxPage: 1,

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
      case "setMaxPage":
     return { ...state, maxPage: action.payload };
   
    default:
      return state;
  }
};
