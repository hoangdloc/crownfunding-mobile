import { View, StyleSheet, Text } from "react-native";
import { ms, mvs } from "react-native-size-matters";
import { useAppTranslation } from "@/hooks";
import { AnimatedLink, Button, Google, ThemedTypography } from "@/components/ui";
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
      <View style={styles.formContainer}>
        <Button block variant="outline" size="lg">
          <Google />
          <ThemedTypography as="text" colorName="outlineButton" style={styles.signUpButtonText}>
            {t("screens.login_screen.sign_in_with_google")}
          </ThemedTypography>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    paddingVertical: mvs(30),
    paddingHorizontal: ms(20),
    gap: mvs(25)
  },
  headingContainer: {
    gap: mvs(10),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  signUpButtonText: {
    fontSize: 16,
    fontWeight: "semibold"
  },
  formContainer: {
    flexDirection: "column",
    gap: mvs(20)
  }
});

export default LoginScreen;
