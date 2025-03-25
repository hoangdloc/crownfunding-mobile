import React, { forwardRef } from "react";
import { GestureResponderEvent, StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { ms, mvs } from "react-native-size-matters";
import debounce from "lodash/debounce";
import { ButtonProps, ButtonRef } from "./types";
import { BorderRadius, ColorPalette } from "@/constants";

const DefaultDebounceTime = 300;

export const Button = forwardRef<ButtonRef, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      block = false,
      debouceOnClick = false,
      style,
      children,
      onPress,
      ...rest
    },
    ref
  ) => {
    const colorScheme = useColorScheme() ?? "light";
    const debounceWait = typeof debouceOnClick === "number" ? debouceOnClick : DefaultDebounceTime;

    const onPressDebounced: typeof onPress | undefined =
      onPress &&
      debounce(onPress, debounceWait, {
        leading: true,
        trailing: false
      });

    const handlePress = (e: GestureResponderEvent): void => {
      e.stopPropagation();
      if (debouceOnClick !== false) {
        onPressDebounced?.(e);
        return;
      }
      onPressDebounced?.(e);
    };

    return (
      <TouchableOpacity
        ref={ref}
        style={[
          style,
          styles.button,
          size === "md" && styles.md,
          size === "lg" && styles.lg,
          block && styles.block,
          variant === "outline" && colorScheme === "light" && styles.lightOutline,
          variant === "outline" && colorScheme === "dark" && styles.darkOutline
        ]}
        onPress={handlePress}
        {...rest}
      >
        {children}
      </TouchableOpacity>
    );
  }
);
Button.displayName = "Button";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: ms(10),
    minHeight: mvs(40),
    paddingVertical: mvs(11),
    paddingHorizontal: ms(12),
    borderRadius: BorderRadius.md,
    textAlign: "center"
  },
  lg: {
    minHeight: mvs(52),
    paddingVertical: mvs(13),
    paddingHorizontal: ms(16)
  },
  md: {
    minHeight: mvs(40),
    paddingVertical: mvs(11),
    paddingHorizontal: ms(12)
  },
  block: {
    width: "100%"
  },
  lightOutline: {
    borderWidth: 1,
    borderColor: ColorPalette.whitish.strokeColor
  },
  darkOutline: {
    borderWidth: 1,
    borderColor: ColorPalette.dark.strokeColor
  }
});
