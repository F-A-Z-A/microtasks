import { useState } from "react";
import { NewComponent } from "./components/NewComponent";

export type BanknotsType = {
  banknots: string;
  nominal: number;
  number: string;
};

export type FilterType = "all" | "rubls" | "dollars";

export function App() {
  const [money, setMoney] = useState<BanknotsType[]>([
    { banknots: "Dollars", nominal: 100, number: " a1234567890" },
    { banknots: "Dollars", nominal: 50, number: " z1234567890" },
    { banknots: "RUBLS", nominal: 100, number: " w1234567890" },
    { banknots: "Dollars", nominal: 100, number: " e1234567890" },
    { banknots: "Dollars", nominal: 50, number: " c1234567890" },
    { banknots: "RUBLS", nominal: 100, number: " r1234567890" },
    { banknots: "Dollars", nominal: 50, number: " x1234567890" },
    { banknots: "RUBLS", nominal: 50, number: " v1234567890" },
  ]);

  const [filter, setFilter] = useState<FilterType>("all");

  let currentMoney = money;

  if (filter === "rubls") {
    currentMoney = money.filter((b) => b.banknots === "RUBLS");
  }
  if (filter === "dollars") {
    currentMoney = money.filter((b) => b.banknots === "Dollars");
  }

  const onClickHandler = (name: FilterType) => {
    setFilter(name);
  };

  return <NewComponent money={currentMoney} callBack={onClickHandler} />;
}
