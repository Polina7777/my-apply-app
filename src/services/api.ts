import { actionGetAllColors, actionSetIsLoading, actionSetErrorPage, actionGetColorBySearchString, actionGetColorById } from "store/Actions";
import { AsyncDispatch } from "store/Store";
import { SliceState } from "store/Use-reducer";

class ApiService {
getColorList(info:SliceState) {
    return async (dispatch: AsyncDispatch) => {
      if (!info.searchString) {
        try {
          const responce = await fetch(
            `https://reqres.in/api/products/?page=${info.page}&per_page=5`
          );
          if (responce.status === 200) {
            const data = await responce.json();
            dispatch(actionGetAllColors(data));
          } else {
            dispatch(actionSetIsLoading(false));
            dispatch(actionSetErrorPage(true));
          }
        } catch (error) {
          return error;
        }
      } else {
        try {
          const responce = await fetch(
            `https://reqres.in/api/products/?id=${info.searchString}&per_page=5`
          );
          if (responce.status === 200) {
            const data = await responce.json();
            dispatch(actionGetColorBySearchString(new Array(data.data)));
          } else {
            dispatch(actionSetIsLoading(false));
            dispatch(actionSetErrorPage(true));
          }
        } catch (error) {
          return error;
        }
      }
    };
  };
 getColorById(id: number){
    return async (dispatch: AsyncDispatch) => {
      try {
        const responce = await fetch(`https://reqres.in/api/products/${id}`);
        const data = await responce.json();
        dispatch(actionGetColorById(data)); 
      } catch (error) {
        return error;
      }
    };
  };

}
const api = new ApiService();
export default api;
