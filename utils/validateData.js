import React from "react";

const validateData = (dishData, conditions) => {
  const { name, cookingTime, type } = dishData;
  if (!name || !cookingTime || !type) return false;
  if (conditions.length > 0) {
    const conditionsValidate = conditions.filter(
      (condition) => condition.value === ""
    );
    if (conditionsValidate.length > 0) return false;
    return true;
  }
};

export default validateData;
