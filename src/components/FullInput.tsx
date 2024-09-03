import { ChangeEvent, useState } from "react";

type InputType = {
  addMessage: (title: string) => void;
};
export const FullInput = (props: InputType) => {
  const [title, setTitle] = useState<string>("");
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onClickButtonHandler = () => {
    props.addMessage(title);
    setTitle("");
  };

  return (
    <>
      <input value={title} onChange={onChangeInputHandler} />
      <button onClick={onClickButtonHandler}>+</button>
    </>
  );
};
