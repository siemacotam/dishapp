import React from "react";
import validateData from "./validateData";

export const handleSubmit = (
  event,
  dishData,
  conditions,
  setValidateInfo,
  setDishData,
  setConditions
) => {
  event.preventDefault();
  if (!validateData(dishData, conditions)) {
    setValidateInfo(
      " Wszystkie dane muszą być uzupełnione przed wysłaniem formularza "
    );
    return;
  }

  let newDish = {
    name: dishData.name,
    preparation_time: dishData.cookingTime,
    type: dishData.type,
  };
  conditions.map((el) => {
    const { shortName, value } = el;
    newDish[shortName] = Number(value);
  });

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newDish),
  };

  fetch("https://frosty-wood-6558.getsandbox.com:443/dishes", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        if (data.name === dishData.name) {
          setValidateInfo("Dish added to menu");
          setTimeout(() => {
            setValidateInfo("");
          }, 3000);
          setConditions([]);
          setDishData({
            name: "",
            cookingTime: "",
            type: "",
          });
        }
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
