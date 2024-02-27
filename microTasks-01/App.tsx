import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

// Урок Button
// function App() {
//   const Button1Fun = (subscriber: string, age: number) => {
//     console.log(subscriber, age)
//   }
//   const Button2Fun = (subscriber: string, age: number) => {
//     console.log(subscriber, age)
//   }
//   const Button3Fun = () => {
//     console.log("i`m stupid button")
//   }
//
//   return (
//     <div className={"App"}>
//       <Button name={"Button 1"} callBack={() => Button1Fun("vasya", 21)}/>
//       <Button name={"Button 2"} callBack={() => Button2Fun("ivan", 22)}/>
//       <Button name={"Button 3"} callBack={Button3Fun}/>
//     </div>
//   );
// }

// Урок UseState
// function App() {
//   // let a = 1;
//   const [a, setA] = useState(1)
//
//   const onClickHandler1 = () => {
//     setA(++a);
//     console.log(a)
//   }
//   const onClickHandler2 = () => {
//     setA(a = 1);
//     console.log(a)
//   }
//
//   return (
//     <div className={"App"}>
//       <h1>{a}</h1>
//       <button onClick={onClickHandler1}>number</button>
//       <button onClick={onClickHandler2}>0</button>
//     </div>
//   );
// }

export type FilterType = 'all' | 'rub' | 'usd'

function App() {
  const [money, setMoney] = useState([
    {banknots: 'USD', value: 100, number: 'a1234567890'},
    {banknots: 'USD', value: 50, number: 'z1234567890'},
    {banknots: 'RUB', value: 100, number: 'w1234567890'},
    {banknots: 'USD', value: 100, number: 'e1234567890'},
    {banknots: 'USD', value: 50, number: 'c1234567890'},
    {banknots: 'RUB', value: 100, number: 'r1234567890'},
    {banknots: 'USD', value: 50, number: 'x1234567890'},
    {banknots: 'RUB', value: 50, number: 'v1234567890'},
  ])
  
  let currentMoney = money;
  const [filter, setFilter] = useState<FilterType>('all')
  
  if (filter === 'rub') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUB')
  }
  if (filter === 'usd') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'USD')
  }
  
  const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
  }
  
  return (
    <>
      <NewComponent arrCurrentMoney={currentMoney} funFilterHandler={onClickFilterHandler}/>
    </>
  );
}

export default App;