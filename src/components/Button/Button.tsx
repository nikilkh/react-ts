import React from "react";
import { ButtonStyle } from "./Button.styled";
interface props {
  children: React.ReactNode;
  onclick: React.MouseEventHandler<HTMLButtonElement>;
}
export const Button = (props: props) => {
  return <ButtonStyle onClick={props.onclick}>{props.children}</ButtonStyle>;
};
