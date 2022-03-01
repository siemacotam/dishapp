import React from "react";

export const dishInput = (dishData, setDishData) => {
  return (
    <div className="form__inputWrapper">
      <p className="form__label">Dish</p>
      <input
        className="form__input"
        type="text"
        value={dishData.name}
        onChange={(event) =>
          setDishData({ ...dishData, name: event.target.value })
        }
      />
    </div>
  );
};
