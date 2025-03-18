import { ViewProps, ViewStyle } from "react-native";

export type SafeAreaViewProps = Omit<ViewProps, "style"> & {
  style?: Omit<
    ViewStyle,
    "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft"
  >;
};
