// import { Data } from 'api/api-layout/general-api-page/General-api-page-interface';

export const actionGetAllColors = (payload:{}) => {
  return { type: 'getAllColors', payload };
};
export const actionGetColorById = (payload) => {
  return { type: 'getColorById', payload };
};
export const actionGetAllEpisodes = (payload:{}) => {
  return { type: 'getAllEpisodes', payload };
};
export const actionGetAllLocations = (payload:{}) => {
  return { type: 'getAllLocations', payload };
};
export const actionClearAll = () => {
  return { type: 'clearAll' };
};
