import { forwardRef } from "react";
import { Text, TextStyle } from "react-native";
import { TypographyProps } from "./types";

const getFontStyles = (size: number, weight: TextStyle["fontWeight"]) => ({
  fontFamily: "Epilogue",
  fontSize: size,
  fontWeight: weight
});

export const Typography = forwardRef<Text, TypographyProps>(
  ({ as = "text", style, ...rest }, ref) => {
    switch (as) {
      case "headline-1":
        return (
          <Text
            ref={ref}
            style={[style, getFontStyles(40, "bold")]}
            {...rest}
          />
        );

      case "headline-2":
        return (
          <Text
            ref={ref}
            style={[style, getFontStyles(25, "bold")]}
            {...rest}
          />
        );

      case "headline-3":
        return (
          <Text
            ref={ref}
            style={[style, getFontStyles(22, "semibold")]}
            {...rest}
          />
        );

      case "headline-3-bold":
        return (
          <Text
            ref={ref}
            style={[style, getFontStyles(20, "bold")]}
            {...rest}
          />
        );

      case "body-lg":
        return (
          <Text
            ref={ref}
            style={[style, getFontStyles(18, "bold")]}
            {...rest}
          />
        );

      case "body":
        return (
          <Text
            ref={ref}
            style={[style, getFontStyles(16, "bold")]}
            {...rest}
          />
        );

      case "paragraph-bold":
        return (
          <Text
            ref={ref}
            style={[style, getFontStyles(14, "bold")]}
            {...rest}
          />
        );

      case "paragraph":
        return (
          <Text
            ref={ref}
            style={[style, getFontStyles(12, "semibold")]}
            {...rest}
          />
        );

      case "text":
      default:
        return (
          <Text
            ref={ref}
            style={[
              style,
              {
                fontFamily: "Epilogue"
              }
            ]}
            {...rest}
          />
        );
    }
  }
);
Typography.displayName = "Typography";
