import { ButtonStyle } from "./Button.styled";
import { buttonProps } from "./Button.types";

export const Button = (props: buttonProps) => {
  return <ButtonStyle onClick={props.onclick}>{props.children}</ButtonStyle>;
};
