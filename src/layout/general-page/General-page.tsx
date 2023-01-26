import Cards from "components/cards/Cards";
import { actionGetColorById, actionSetMaxPage } from "store/Actions";
import { useAppSelector, useAsyncTypedDispatch } from "store/Hooks";
import { AsyncDispatch } from "store/Store";
import PersonalColorCard from "components/personal-color-card/Personal-color-card";
import { useState } from "react";
import "./General-page.css";
import ErrorPage from "layout/error-page/Error-page";

const GeneralPage = () => {
  const info = useAppSelector((state) => state.info);
  const thunkDispatch = useAsyncTypedDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const showPersonalColorCard = () => {
    return setIsOpenModal(true);
  };
  const closePersonalColorCard = () => {
    return setIsOpenModal(false);
  };
  const getColorFromServerById = (id: number) => {
    return async (dispatch: AsyncDispatch) => {
      try {
        const responce = await fetch(`https://reqres.in/api/products/${id}`);
        const data = await responce.json();
        dispatch(actionGetColorById(data.data));
        showPersonalColorCard();
        // dispatch({ type: 'changePage', payload: 1 });
       
      } catch (error) {
        console.log("error");
        // return <ErrorPage/>
        // setIsLoading(false);
        // dispatch(actionClearAll());
      }
    };
  };

  const onGetColorFromServerById = (id: number) => {
    thunkDispatch(getColorFromServerById(id));
  };

  return (
    <div className="general_page">
        
      <Cards
        value={info.searchString}
        getColorFilterById={onGetColorFromServerById}
      />


        <PersonalColorCard
          isOpen={isOpenModal}
          closeHandler={closePersonalColorCard}
        
        />
       
    </div>
  );
};
export default GeneralPage;
