import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  useColorScheme,
  View
} from "react-native";
import { ms, mvs } from "react-native-size-matters";
import { InputProps } from "./types";
import { BorderRadius, ColorPalette, Colors } from "@/constants";

export const Input = React.forwardRef<TextInput, InputProps>(
  (
    {
      containerStyles,
      leftIcon,
      rightIcon,
      style,
      autoCapitalize = "none",
      placeholderTextColor,
      autoCorrect = false,
      spellCheck = false,
      autoComplete = "off",
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const colorScheme = useColorScheme() ?? "light";
    const themedPlaceholderTextColor =
      placeholderTextColor ?? Colors[colorScheme].placeholderTextColor;

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>): void => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>): void => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <View style={[styles.container, containerStyles]}>
        {leftIcon && <View style={[styles.iconWrapper, styles.leftIcon]}>{leftIcon}</View>}
        <TextInput
          ref={ref}
          autoCapitalize={autoCapitalize}
          style={[
            styles.input,
            colorScheme === "dark" ? styles.inputDark : styles.inputLight,
            isFocused && styles.inputFocused,
            !!leftIcon && styles.hasLeftIcon,
            !!rightIcon && styles.hasRightIcon,
            style
          ]}
          placeholderTextColor={themedPlaceholderTextColor}
          autoCorrect={autoCorrect}
          spellCheck={spellCheck}
          autoComplete={autoComplete}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
        {rightIcon && <View style={[styles.iconWrapper, styles.rightIcon]}>{rightIcon}</View>}
      </View>
    );
  }
);
Input.displayName = "Input";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: mvs(52),
    position: "relative"
  },
  containerLight: {
    borderColor: Colors.light.borderContainerInputColor
  },
  containerDark: {
    borderColor: Colors.dark.borderContainerInputColor
  },
  input: {
    flexShrink: 1,
    width: "100%",
    height: "100%",
    padding: 0,
    paddingVertical: mvs(15),
    paddingHorizontal: mvs(25),
    fontSize: 14,
    fontWeight: "medium",
    fontFamily: "Epilogue",
    borderWidth: 1,
    borderRadius: BorderRadius.md,
    textAlignVertical: "center",
    outline: "none",
    ...Platform.select({
      ios: {
        shadowOpacity: 0,
        textDecorationLine: "none"
      },
      android: {
        elevation: 0,
        borderBottomWidth: 0
      }
    })
  },
  inputLight: {
    borderColor: Colors.light.borderContainerInputColor,
    color: Colors.light.inputColor
  },
  inputDark: {
    borderColor: Colors.dark.borderContainerInputColor,
    color: Colors.dark.inputColor
  },
  inputFocused: {
    borderColor: ColorPalette.primary.color
  },
  hasLeftIcon: {
    paddingLeft: ms(58)
  },
  hasRightIcon: {
    paddingRight: ms(58)
  },
  iconWrapper: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    transform: [{ translateY: "-50%" }]
  },
  rightIcon: {
    right: ms(25)
  },
  leftIcon: {
    left: ms(25)
  }
});
