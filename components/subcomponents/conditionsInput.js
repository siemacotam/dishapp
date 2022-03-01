import React from "react";
import { conditionsOptions } from "../../utils/selectOptions";

export const conditionsInput = (conditions, setConditions) => {
  return (
    <div>
      <p className="form__label border-bottom">Conditions :</p>

      {conditions.length > 0 ? (
        conditionsOptions(conditions, setConditions)
      ) : (
        <div>
          <p className="text-muted">Pick dish type first</p>
        </div>
      )}
    </div>
  );
};
