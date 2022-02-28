import React from "react";
import "../sass/style.sass";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  return (
    <div className="appWrap">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
