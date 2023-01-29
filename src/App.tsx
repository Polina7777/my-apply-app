import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import Footer from "./layout/footer/Footer";

import React from "react";
import { Provider } from "react-redux";
import store from "store/Store";
import Loader from "ui/loader/Loader";
function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Loader>
          <Header /> <Main /> <Footer />
        </Loader>
      </Provider>
    </div>
  );
}

export default App;
