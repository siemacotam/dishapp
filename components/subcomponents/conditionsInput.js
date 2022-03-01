import React from "react";
import { conditionsOptions } from "../../utils/selectOptions";

export const conditionsInput = (conditions, setConditions) => {
  const noConditions = (
    <div>
      <p className="text-muted">Pick dish type first</p>
    </div>
  );
  const thereAreConditions = conditionsOptions(conditions, setConditions);
  return (
    <div>
      <p className="form__label border-bottom">Conditions :</p>
      {conditions.length > 0 ? thereAreConditions : noConditions}
    </div>
  );
};
