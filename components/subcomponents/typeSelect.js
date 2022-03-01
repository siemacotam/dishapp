import React from "react";
import { dishOptions } from "../../utils/selectOptions";

export const typeSelect = (dishData, setDishData) => {
  return (
    <div className="form__inputWrapper">
      <p className="form__label">Type:</p>
      <select
        className="form__select bigCapital"
        value={dishData.type}
        onChange={(event) =>
          setDishData({ ...dishData, type: event.target.value })
        }
      >
        <option value={""}>Pick dish type</option>
        {dishOptions}
      </select>
    </div>
  );
};
