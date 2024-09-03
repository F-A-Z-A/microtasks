import { useState } from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

type MessageType = {
  message: string;
};

export function App() {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<MessageType[]>([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
  ]);
  const addMessage = () => {
    setMessage([{ message: title }, ...message]);
    setTitle("");
  };

  return (
    <div className="App">
      <Input title={title} setTitle={setTitle} />
      <Button name={"+"} callBack={addMessage} />

      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
}
