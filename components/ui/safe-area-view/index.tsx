import { forwardRef } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaViewProps } from "./types";

export const SafeAreaView = forwardRef<View, SafeAreaViewProps>(
  ({ style, ...rest }, ref) => {
    const insets = useSafeAreaInsets();

    return (
      <View
        ref={ref}
        style={[
          {
            paddingTop: insets.top,
            paddingRight: insets.right,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            flex: 1
          },
          style
        ]}
        {...rest}
      />
    );
  }
);
SafeAreaView.displayName = "SafeAreaView";
