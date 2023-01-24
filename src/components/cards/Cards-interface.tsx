// import { Character } from '../general-api-page/General-api-page-interface';

import { ColorData } from "store/Use-reducer";

export interface CardsProps {
  className?: string;
  getColorFilterById: (item: string) => void;
  searchString: string;
}
export interface CardsState {
  colors: ColorData[];
  page: number;
  personalColorData: ColorData | null;
  isLoading: boolean;
}
