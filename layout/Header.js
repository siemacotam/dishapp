import React from "react";
import { btnStyles } from "../utils/btnStyles";

const Header = ({ mode, setMode }) => {
  return (
    <header className="header shadowItem">
      <div className="header__wrap">
        <p className="header__title">DishApp</p>
        <div className="header__btnWrapper">
          <button
            className={btnStyles(mode, "day")}
            onClick={() => setMode("day")}
          >
            <i class="fa fa-sun-o" aria-hidden="true"></i>
          </button>
          <button
            className={btnStyles(mode, "night")}
            onClick={() => setMode("night")}
          >
            <i class="fa fa-moon-o" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
