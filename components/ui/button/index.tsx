import React, { forwardRef } from "react";
import { TouchableOpacity } from "react-native";
import { ButtonProps, ButtonRef } from "./types";

const Button = forwardRef<ButtonRef, ButtonProps>(({}, ref) => {
  return <TouchableOpacity ref={ref}>Button</TouchableOpacity>;
});

export default Button;
