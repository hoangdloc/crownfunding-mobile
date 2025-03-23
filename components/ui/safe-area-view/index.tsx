import { forwardRef } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { SafeAreaViewProps, ThemedSafeAreaViewProps } from "./types";
import { ColorPalette } from "@/constants";
import { useThemeColor } from "@/hooks";

export const SafeAreaView = forwardRef<View, SafeAreaViewProps>(
  ({ transparentHeader = false, disableBottomInset = false, style, ...rest }, ref) => {
    const insets = useSafeAreaInsets();
    const headerHeight = useHeaderHeight();

    return (
      <View
        ref={ref}
        style={[
          {
            paddingTop: transparentHeader ? headerHeight : insets.top,
            paddingBottom: disableBottomInset ? 0 : insets.bottom,
            paddingRight: insets.right,
            paddingLeft: insets.left
          },
          style
        ]}
        {...rest}
      />
    );
  }
);
SafeAreaView.displayName = "SafeAreaView";

export const ThemedSafeAreaView = forwardRef<View, ThemedSafeAreaViewProps>(
  (
    {
      lightColor = ColorPalette.whitish.liteBackground,
      darkColor = ColorPalette.dark.darkBg,
      style,
      ...rest
    },
    ref
  ) => {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

    return <SafeAreaView ref={ref} style={[{ backgroundColor }, style]} {...rest} />;
  }
);
ThemedSafeAreaView.displayName = "ThemedSafeAreaView";
