import React from "react";

export const timeInput = (dishData, setDishData) => {
  return (
    <div className="form__inputWrapper">
      <p className="form__label">Cooking time:</p>
      <input
        className="form__input"
        type="time"
        step="1"
        min="00:00:00"
        max="99:00:00"
        value={dishData.cookingTime}
        onChange={(event) =>
          setDishData({ ...dishData, cookingTime: event.target.value })
        }
      />
    </div>
  );
};
