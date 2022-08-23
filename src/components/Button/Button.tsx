import React from "react";
import { ButtonStyle } from "./Button.styled";
import { props } from "./Button.types";

export const Button = (props: props) => {
  return <ButtonStyle onClick={props.onclick}>{props.children}</ButtonStyle>;
};
