import { Input } from "@nextui-org/react";
import { FunctionComponent } from "react";

interface InputProps {
  valueInput: any;
}

export const TodoInput: FunctionComponent<InputProps> = ({ valueInput }) => {
  return <Input style={{ border: "5px solid black" }} value={valueInput} />;
};
