import Cards from "components/cards/Cards";
import { actionGetColorById } from "store/Actions";
import { useAppSelector, useAsyncTypedDispatch } from "store/Hooks";
import { AsyncDispatch } from "store/Store";
import { Route, Routes, useNavigate } from "react-router-dom";
import PersonalColorCard from "components/personal-color-card/Personal-color-card";

const GeneralPage = () => {
  const info = useAppSelector((state) => state.info);
  const thunkDispatch = useAsyncTypedDispatch();
  const navigation = useNavigate();

  const getColorFromServerById = (id: number) => {
    return async (dispatch: AsyncDispatch) => {
      await fetch(`https://reqres.in/api/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.data);
          console.log("by id");
          dispatch(actionGetColorById(data.data));
          navigation("color");
        });
    };
  };

  const onGetColorFromServerById = (id: number) => {
    thunkDispatch(getColorFromServerById(id));
  };

  return (
    <div className="general_page">
    <Routes>
      <Route path="" element={<Cards
          searchString={""}
          getColorFilterById={onGetColorFromServerById}
        />}/>
     
      <Route path="color" element={<PersonalColorCard/>}/>
    </Routes>
    </div>
  );
};
export default GeneralPage;
