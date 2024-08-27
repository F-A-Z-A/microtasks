import React from "react";
import { BanknotsType, FilterType } from "../App";

type NewComponentType = {
  money: BanknotsType[];
  callBack: (name: FilterType) => void;
};

export const NewComponent = (props: NewComponentType) => {
  const onClickHandler = (name: FilterType) => {
    props.callBack(name);
  };

  return (
    <>
      <ul>
        {props.money.map((b, index) => {
          return (
            <li key={index}>
              <span>{b.banknots} - </span>
              <span>{b.nominal} - </span>
              <span>{b.number}</span>
            </li>
          );
        })}
      </ul>
      <button onClick={() => onClickHandler("all")}>ALL</button>
      <button onClick={() => onClickHandler("rubls")}>RUB</button>
      <button onClick={() => onClickHandler("dollars")}>USD</button>
    </>
  );
};
