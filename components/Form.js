import React, { useEffect, useState } from "react";
import { dishes } from "../utils/dishesData";
import { handleSubmit } from "../utils/handleSubmit";
import validateData from "../utils/validateData";
import { conditionsInput } from "./subcomponents/conditionsInput";
import { dishInput } from "./subcomponents/dishInput";
import { timeInput } from "./subcomponents/timeInput";
import { typeSelect } from "./subcomponents/typeSelect";
import { validationMsg } from "./subcomponents/validationMsg";

const Form = () => {
  const [dishData, setDishData] = useState({
    name: "",
    cookingTime: "",
    type: "",
  });
  const [conditions, setConditions] = useState([]);
  const [validateInfo, setValidateInfo] = useState("");
  const { type } = dishData;

  useEffect(() => {
    if (type) {
      const data = dishes.find((el) => el.name === type);
      const newConditions = [];
      data.conditions.map((condition) => {
        const { name, shortName, input, max, min } = condition;
        const newCondition = {
          name,
          value: "",
          shortName,
          input,
          max,
          min,
        };
        newConditions.push(newCondition);
      });
      setConditions(newConditions);
    } else setConditions([]);
  }, [type]);

  useEffect(() => {
    if (validateInfo) {
      if (validateData(dishData, conditions)) setValidateInfo("");
    }
  }, [dishData, conditions]);

  return (
    <form
      className="form"
      onSubmit={(event) =>
        handleSubmit(
          event,
          dishData,
          conditions,
          setValidateInfo,
          setDishData,
          setConditions
        )
      }
    >
      <div className="form__title">
        <p className="title">Add new dish </p>
      </div>
      {dishInput(dishData, setDishData)}
      {timeInput(dishData, setDishData)}
      {typeSelect(dishData, setDishData)}
      {conditionsInput(conditions, setConditions)}
      <div className="form__btnWrapper">
        <button className="form__btn" type="submit">
          Wyślij
        </button>
      </div>
      {validateInfo && validationMsg(validateInfo)}
    </form>
  );
};

export default Form;
