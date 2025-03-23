import { View, StyleSheet } from "react-native";
import { ms, mvs } from "react-native-size-matters";
import { useAppTranslation } from "@/hooks";
import { AnimatedLink, ThemedTypography } from "@/components/ui";
import { ColorPalette } from "@/constants";

const LoginScreen: React.FC = () => {
  const { t } = useAppTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <ThemedTypography as="body-lg" colorName="headline">
          {t("screens.login_screen.welcome_back")}
        </ThemedTypography>
        <View style={styles.signUpContainer}>
          <ThemedTypography
            as="paragraph"
            lightColor={ColorPalette.neutral.text.text3}
            darkColor={ColorPalette.neutral.text.text3}
            colorName="paragraph"
          >
            {t("screens.login_screen.dont_have_an_account")}{" "}
          </ThemedTypography>
          <AnimatedLink href="/register">
            <ThemedTypography as="paragraph" colorName="link">
              {t("screens.login_screen.sign_up")}
            </ThemedTypography>
          </AnimatedLink>
        </View>
      </View>
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
  },
  headingContainer: {
    gap: mvs(10)
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default LoginScreen;
