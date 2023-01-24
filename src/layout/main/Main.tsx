import React from "react";
import { Routes, Route } from "react-router-dom";
import GeneralPage from "layout/general-page/General-page";
import SearchBar from "../../components/search-bar/Search-bar";

const Main = () => {
  return (
    <main className="main">
      <SearchBar />
      <GeneralPage />
    </main>
  );
};
export default Main;
