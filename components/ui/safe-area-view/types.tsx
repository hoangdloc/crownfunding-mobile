import { StyleProp, ViewProps, ViewStyle } from "react-native";

export type SafeAreaViewProps = Omit<ViewProps, "style"> & {
  style?: StyleProp<
    Omit<
      ViewStyle,
      | "padding"
      | "paddingTop"
      | "paddingRight"
      | "paddingBottom"
      | "paddingLeft"
      | "paddingVertical"
      | "paddingHorizontal"
    >
  >;
  transparentHeader?: boolean;
  disableBottomInset?: boolean;
};

export type ThemedSafeAreaViewProps = SafeAreaViewProps & {
  lightColor?: string;
  darkColor?: string;
};
