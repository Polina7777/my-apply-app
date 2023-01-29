import Cards from "components/cards/Cards";
import { useAppSelector, useAsyncTypedDispatch } from "store/Hooks";
import PersonalColorCard from "components/personal-color-card/Personal-color-card";
import { useState } from "react";
import "./General-page.css";
import api from "services/api";

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

  const onGetColorFromServerById = (id: number) => {
    thunkDispatch(api.getColorById(id));
    showPersonalColorCard();  
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
