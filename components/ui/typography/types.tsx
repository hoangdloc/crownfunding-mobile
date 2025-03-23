import { StyleProp, TextProps, TextStyle } from "react-native";
import { Colors } from "@/constants";

type TypographyVariant =
  | "text"
  | "headline-1"
  | "headline-2"
  | "headline-3"
  | "headline-3-bold"
  | "body-lg"
  | "body"
  | "paragraph-bold"
  | "paragraph";

type TypographyThemeProps = Omit<TextProps, "style"> & {
  as: Exclude<TypographyVariant, "text">;
  style?: StyleProp<Omit<TextStyle, "fontFamily" | "fontSize" | "fontWeight">>;
};

type TypographyDefaultProps = Omit<TextProps, "style"> & {
  as?: "text" | undefined;
  style?: StyleProp<Omit<TextStyle, "fontFamily">>;
};

export type TypographyProps = TypographyThemeProps | TypographyDefaultProps;

export type ThemedTypographyProps = TypographyProps & {
  lightColor?: string;
  darkColor?: string;
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark;
};
