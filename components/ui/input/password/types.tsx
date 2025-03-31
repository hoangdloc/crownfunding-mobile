import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export type InputPasswordProps = Omit<TextInputProps, "secureTextEntry"> & {
  containerStyles?: StyleProp<ViewStyle>;
  leftIcon?: React.ReactNode;
};
