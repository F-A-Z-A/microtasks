import React from "react";
import "./App.css";
import { Button } from "./components/button";

export function App() {
  const Button1Foo = (name: string, age: number) => {
    console.log("Hello i`m ", name, age);
  };
  const Button2Foo = (name: string) => {
    console.log("Hello i`m ", name);
  };
  const Button3Foo = () => {
    console.log("i`m stupid button");
  };

  return (
    <div className="App">
      <Button name={"MyYouTubeChannel-1"} callBack={() => Button1Foo("VASYA", 21)} />
      <Button name={"MyYouTubeChannel-2"} callBack={() => Button2Foo("IVAN")} />
      <Button name={"Stupid button"} callBack={Button3Foo} />
    </div>
  );
}

// export function App() {
//   // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//   //   console.log("Hello i`m VASYA");
//   // };
//   // const mySecondSubscriber = () => {
//   //   console.log("Hello i`m IVAN");
//   // };
//   // const onClickHandler = (name: string) => {
//   //   console.log("Hello i`m ", name);
//   // };
//
//   const foo1 = () => {
//     // пусто
//     console.log(100200);
//   };
//   const foo2 = (num: number) => {
//     // 100200
//     console.log(num);
//   };
//
//   return (
//     <div className="App">
//       {/*<button onClick={(event) => console.log("Hello")}>MyYouTubeChannel-1</button>*/}
//       {/*<button onClick={(event) => onClickHandler("VASYA")}>MyYouTubeChannel-1</button>*/}
//       {/*<button onClick={(event) => onClickHandler("IVAN")}>MyYouTubeChannel-2</button>*/}
//       <button onClick={foo1}>1</button>
//       <button onClick={() => foo2(100200)}>2</button>
//     </div>
//   );
// }