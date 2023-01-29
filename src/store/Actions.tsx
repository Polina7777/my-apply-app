import { ColorData } from "./Use-reducer";

export const actionGetAllColors = (payload:ColorData[]|ColorData) => {
  return { type: 'setAllColors', payload };
};
export const actionGetColorById = (payload:ColorData) => {
  return { type: 'setColorById', payload };
};
export const actionGetColorBySearchString = (payload:any) => {
  return { type: 'setColorBySearchString', payload };
};
export const actionGetSearchString = (payload:'') => {
  return { type: 'setSearchString', payload };
};
export const actionSetMaxPage = (payload:'')=>{
  return{type:'setMaxPage',payload}
}
export const actionSetErrorPage = (payload:boolean)=>{
  return{type:'setErrorPage',payload}
}
export const actionSetIsLoading = (payload:boolean)=>{
  return{type:'setIsLoading',payload}
}


