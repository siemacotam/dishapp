import React from "react";

export const validationMsg = (validateInfo) => {
  return (
    <div className="form__validationMsg">
      <i class="fa fa-info-circle" aria-hidden="true"></i>
      <p>{validateInfo}</p>
      <i class="fa fa-info-circle" aria-hidden="true"></i>
    </div>
  );
};
