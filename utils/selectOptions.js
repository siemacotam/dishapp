import { dishes } from "./dishesData";
import React from "react";

export const dishOptions = dishes.map((dish) => (
  <option className="bigCapital" key={dish.name} value={dish.name}>
    {dish.name}
  </option>
));

export const conditionsOptions = (conditions, setConditions) => {
  if (conditions.length > 0) {
    return conditions.map((condition) => {
      const { name, value, input, max, min } = condition;
      return (
        <div className="form__inputWrapper" key={name}>
          <p className="form__label">{name}</p>
          <input
            className="form__input"
            type={input}
            max={max}
            min={min}
            value={value}
            onChange={(e) => {
              const index = conditions.findIndex(
                (el) => el.name === condition.name
              );
              const newConditions = [...conditions];
              newConditions[index].value = e.target.value;
              setConditions(newConditions);
            }}
          />
        </div>
      );
    });
  }
};
