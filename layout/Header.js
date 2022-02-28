import React from "react";

const Header = () => {
  return (
    <header className="header shadowItem">
      <div className="header__wrap">
        <p className="header__title">DishApp</p>
        <div className="header__btnWrapper">
          <button className="header__btn">
            <i class="fa fa-sun-o" aria-hidden="true"></i>
          </button>
          <button className="header__btn">
            <i class="fa fa-moon-o" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
