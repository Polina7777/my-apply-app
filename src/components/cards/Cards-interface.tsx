// import { Character } from '../general-api-page/General-api-page-interface';

import { ColorData } from "store/Use-reducer";

export interface CardsProps {
  className?: string;
  getColorFilterById: (item: number) => void;
  value: string;
}
export interface CardsState {
  colors: ColorData[];
  searchString: "";
  page: number;
  personalColorData: ColorData | null;
  isLoading: boolean;
}
