import React, { useEffect, useState } from "react";
import "../sass/style.sass";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  const [mode, setMode] = useState("night");
  useEffect(() => {
    document.querySelector(".header").classList.toggle("header__night");
    document.querySelector("body").classList.toggle("body__night");
    document.querySelector("footer").classList.toggle("footer__night");
  }, [mode]);
  return (
    <div className="appWrap">
      <Header mode={mode} setMode={setMode} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
