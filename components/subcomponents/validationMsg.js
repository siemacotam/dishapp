import React from "react";

export const validationMsg = (validateInfo) => {
  const msgColor =
    validateInfo === "Dish added to menu"
      ? "form__validationMsg green"
      : "form__validationMsg";
  return (
    <div className={msgColor}>
      <i className="fa fa-info-circle" aria-hidden="true"></i>
      <p>{validateInfo}</p>
      <i className="fa fa-info-circle" aria-hidden="true"></i>
    </div>
  );
};
