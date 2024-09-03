import { ChangeEvent } from "react";

type InputType = {
  title: string;
  setTitle: (title: string) => void;
};
export const Input = (props: InputType) => {
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.setTitle(e.target.value);
  };

  return (
    <>
      <input value={props.title} onChange={onChangeInputHandler} />
    </>
  );
};
