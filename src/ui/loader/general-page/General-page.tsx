import Cards from "components/cards/Cards";
import { actionGetAllColors } from "store/Actions";
import { useAppSelector, useAsyncTypedDispatch } from "store/Hooks";
import { AsyncDispatch } from "store/Store";

const GeneralPage = () => {
  const info = useAppSelector((state) => state.info);
  const thunkDispatch = useAsyncTypedDispatch();

  const getColorsFromServer = () => {
    return async (dispatch: AsyncDispatch) => {
      await fetch(`https://reqres.in/api/products`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
          dispatch(actionGetAllColors(data));
        });
    };
  };

  const onGetColorsFromServer = () => {
    thunkDispatch(getColorsFromServer());
  };

  return(
   <Cards getColorFilterById={function (item: string): void {
          throw new Error("Function not implemented.");
      } } searchString={""}/>
  )
};
export default GeneralPage;
