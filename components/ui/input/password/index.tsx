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
      autoCapitalize = "none",
      style,
      placeholderTextColor,
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
      <View
        style={[
          styles.container,
          colorScheme === "dark" ? styles.containerDark : styles.containerLight,
          isFocused && styles.inputFocused,
          containerStyles
        ]}
      >
        {leftIcon && <View style={[styles.iconWrapper, styles.leftIcon]}>{leftIcon}</View>}
        <TextInput
          ref={ref}
          secureTextEntry={!toggleVisibility}
          autoCapitalize={autoCapitalize}
          style={[
            styles.input,
            colorScheme === "dark" ? styles.inputDark : styles.inputLight,
            style
          ]}
          placeholderTextColor={themedPlaceholderTextColor}
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",
    height: mvs(52),
    paddingVertical: mvs(15),
    paddingHorizontal: mvs(25),
    borderWidth: 1,
    borderRadius: BorderRadius.md
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
    fontSize: 14,
    fontWeight: "medium",
    fontFamily: "Epilogue",
    borderWidth: 0,
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
    color: Colors.light.inputColor
  },
  inputDark: {
    color: Colors.dark.inputColor
  },
  inputFocused: {
    borderColor: ColorPalette.primary.color
  },
  iconWrapper: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  rightIcon: {
    marginLeft: ms(8)
  },
  leftIcon: {
    marginRight: ms(8)
  }
});
