import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  useColorScheme,
  View
} from "react-native";
import { ms, mvs } from "react-native-size-matters";
import { InputPasswordProps } from "./types";
import { ActiveOpacity, BorderRadius, ColorPalette, Colors } from "@/constants";
import { EyeOff, EyeOn } from "../../icon";

export const InputPassword = React.forwardRef<TextInput, InputPasswordProps>(
  (
    {
      containerStyles,
      leftIcon,
      style,
      placeholderTextColor,
      autoCorrect = false,
      spellCheck = false,
      autoCapitalize = "none",
      autoComplete = "off",
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [toggleVisibility, setToggleVisibility] = useState(false);
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
          secureTextEntry={!toggleVisibility}
          autoCapitalize={autoCapitalize}
          style={[
            styles.input,
            colorScheme === "dark" ? styles.inputDark : styles.inputLight,
            isFocused && styles.inputFocused,
            !!leftIcon && styles.hasLeftIcon,
            styles.hasRightIcon,
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
        <TouchableOpacity
          activeOpacity={ActiveOpacity}
          style={[styles.iconWrapper, styles.rightIcon]}
          onPress={() => setToggleVisibility(visible => !visible)}
        >
          {toggleVisibility ? (
            <EyeOff color={themedPlaceholderTextColor} />
          ) : (
            <EyeOn color={themedPlaceholderTextColor} />
          )}
        </TouchableOpacity>
      </View>
    );
  }
);
InputPassword.displayName = "InputPassword";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: mvs(52),
    position: "relative"
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
