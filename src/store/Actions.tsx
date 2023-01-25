
export const actionGetAllColors = (payload:{}) => {
  return { type: 'getAllColors', payload };
};
export const actionGetColorById = (payload:{}) => {
  return { type: 'getColorById', payload };
};
export const actionGetSearchString = (payload:'') => {
  return { type: 'getSearchString', payload };
};
export const actionGetAllLocations = (payload:{}) => {
  return { type: 'getAllLocations', payload };
};
export const actionClearAll = () => {
  return { type: 'clearAll' };
};
