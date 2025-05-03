import { View, StyleSheet } from "react-native";
import { ms, mvs } from "react-native-size-matters";
import { useAppTranslation, useThemeColor } from "@/hooks";
import { AnimatedLink, Button, Google, ThemedTypography } from "@/components/ui";
import { BorderRadius, ColorPalette } from "@/constants";
import SigninForm from "./(components)/SigninForm";
import { AuthInnerLayout } from "@/components/layouts";

const LoginScreen: React.FC = () => {
  const { t } = useAppTranslation();
  const containerBackgroundColor = useThemeColor(
    { light: ColorPalette.whitish.liteBackground, dark: ColorPalette.dark.darkSecondary },
    "background"
  );

  return (
    <AuthInnerLayout>
      <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
        <View style={styles.headingContainer}>
          <ThemedTypography as="body-lg" colorName="headline">
            {t("screens.login_screen.welcome_back")}
          </ThemedTypography>
          <View style={styles.loginContainer}>
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
            <ThemedTypography as="text" colorName="outlineButton" style={styles.loginButtonText}>
              {t("screens.login_screen.sign_in_with_google")}
            </ThemedTypography>
          </Button>
          <SigninForm />
        </View>
      </View>
    </AuthInnerLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: "auto",
    borderRadius: BorderRadius.md,
    flexDirection: "column",
    justifyContent: "flex-start",
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
  loginContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "semibold"
  },
  formContainer: {
    flexDirection: "column",
    gap: mvs(20)
  }
});

export default LoginScreen;
