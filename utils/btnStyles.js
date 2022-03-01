import React from "react";

export const btnStyles = (mode, whatMode) => {
  if (mode === whatMode) {
    return "header__btn header__btn-active";
  } else {
    return "header__btn";
  }
};
