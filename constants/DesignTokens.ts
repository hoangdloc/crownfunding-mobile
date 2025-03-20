export const ColorPalette = {
  primary: {
    primaryExtra2: "#f1fbf7",
    primary80: "#d2f2e3",
    primary60: "#a5e6c6",
    primary40: "#77d9aa",
    primary20: "#4acd8d",
    color: "#1dc071"
  },
  secondary: {
    secondary80: "#e2dbff",
    secondary60: "#c5b6fe",
    secondary40: "#a992fe",
    secondary20: "#8c6dfd",
    color: "#6f49fd"
  },
  dark: {
    red2: "#422c32",
    strokeColor: "#3a3a43",
    darkSoft: "#24242c",
    softDark: "#22222c",
    darkSecondary: "#1c1c24",
    darkBg: "#13131a"
  },
  neutral: {
    text: {
      text4: "#b2b3bd",
      text3: "#808191",
      text2: "#4b5264",
      text1: "#171725"
    },
    icon: {
      color: "#a2a2a8"
    }
  },
  whitish: {
    liteBackground: "#fcfcfd",
    strokeColor: "#f1f1f3",
    graySoft: "#fcfcfc",
    whiteSoft: "#fcfbff",
    pureWhite: "#ffffff"
  },
  error: "#eb5757"
};

export const Colors = {
  light: {
    background: ColorPalette.whitish.liteBackground,
    headline: ColorPalette.neutral.text.text1
  },
  dark: {
    background: ColorPalette.dark.darkBg,
    headline: ColorPalette.whitish.pureWhite
  }
};

export const BorderRadius = {
  md: 10
};
