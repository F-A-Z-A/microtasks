import React from 'react';
import {FilterType} from "../App";

type MoneyType = {
  banknots: string
  value: number
  number: string
}

type NewComponentType = {
  arrCurrentMoney: Array<MoneyType>
  funFilterHandler: (nameButton: FilterType) => void
}

export const NewComponent = (props: NewComponentType) => {
  return (
    <>
      <ul>
        {props.arrCurrentMoney.map((objFromMoney, index) => {
          return (
            <li key={index}>
              <span> {objFromMoney.banknots}</span>
              <span> {objFromMoney.value}</span>
              <span> {objFromMoney.number}</span>
            </li>
          )
        })}
      </ul>
      <button onClick={() => props.funFilterHandler('all')}>ALL</button>
      <button onClick={() => props.funFilterHandler('rub')}>RUB</button>
      <button onClick={() => props.funFilterHandler('usd')}>USD</button>
    </>
  );
};