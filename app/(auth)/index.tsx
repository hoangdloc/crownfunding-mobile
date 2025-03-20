import { ColorPalette } from "@/constants";
import { Text, View, StyleSheet } from "react-native";
import { ms, mvs } from "react-native-size-matters";
import { useAppTranslation, useThemeColor } from "@/hooks";
import { Typography } from "@/components/ui";

const LoginScreen: React.FC = () => {
  const headlineColor = useThemeColor(
    { light: ColorPalette.neutral.text.text1, dark: ColorPalette.whitish.pureWhite },
    "headline"
  );
  const { t } = useAppTranslation();

  return (
    <View style={[styles.container]}>
      <Typography as="body-lg" style={{ color: headlineColor }}>
        {t("screens.login_screen.welcome_back")}
      </Typography>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo nulla incidunt
        sunt vitae aut esse delectus nihil dolor! Nobis esse quibusdam blanditiis sunt quos? Numquam
        maxime excepturi placeat neque?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: mvs(30),
    paddingHorizontal: ms(20)
  }
});

export default LoginScreen;
