import Cards from "components/cards/Cards";
import { actionGetColorById } from "store/Actions";
import { useAppSelector, useAsyncTypedDispatch } from "store/Hooks";
import { AsyncDispatch } from "store/Store";
import PersonalColorCard from "components/personal-color-card/Personal-color-card";
import { useState } from "react";

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
      await fetch(`https://reqres.in/api/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.data);
          dispatch(actionGetColorById(data.data));
          showPersonalColorCard();
        });
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
