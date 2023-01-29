import { AnyAction } from "redux";

export interface ColorData {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}

export type SliceState = {
  colors: ColorData[]|ColorData;
  color: ColorData;
  searchString: "";
  page: number;
  maxPage: number;
  errorPage:boolean;
  isLoading:boolean;
};
export const initialState = {
  colors: [],
  color: [],
  searchString: "",
  page: 1,
  maxPage: 1,
  errorPage:false,
  isLoading:false

} as unknown as SliceState;

export const SecondReducer = (state = initialState, action: AnyAction) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case "setAllColors":
      return { ...state, colors: action.payload.data,isLoading:false,maxPage:action.payload.total_pages,errorPage:false };
    case "setColorById":
      return { ...state, color:action.payload.data,isLoading:false,errorPage:false  };
      case "setColorBySearchString":
        return { ...state, colors:action.payload,isLoading:false,errorPage:false  };
    case "setSearchString":
      return { ...state, searchString: action.payload };
    case "changePage":
      return { ...state, page: action.payload,isLoading:false,errorPage:false };
      case "setMaxPage":
     return { ...state, maxPage: action.payload };
     case "setErrorPage":
     return { ...state, errorPage: action.payload };
     case "setIsLoading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
