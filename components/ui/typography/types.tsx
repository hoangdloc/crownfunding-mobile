import { TextProps, TextStyle } from "react-native";

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
  style?: Omit<TextStyle, "fontFamily" | "fontSize" | "fontWeight">;
};

type TypographyDefaultProps = Omit<TextProps, "style"> & {
  as?: "text" | undefined;
  style?: Omit<TextStyle, "fontFamily">;
};

export type TypographyProps = TypographyThemeProps | TypographyDefaultProps;
