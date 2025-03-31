import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export type InputProps = Omit<TextInputProps, "secureTextEntry"> & {
  containerStyles?: StyleProp<ViewStyle>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};
