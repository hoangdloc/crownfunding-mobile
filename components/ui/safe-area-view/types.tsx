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
    >
  >;
};
