import { StyleSheet, View } from "react-native";
import { ms, mvs } from "react-native-size-matters";
import { AnimatedLink, Google, ThemedTypography, Button } from "@/components/ui";
import { BorderRadius, ColorPalette } from "@/constants";
import { useAppTranslation, useThemeColor } from "@/hooks";
import SignupForm from "./(components)/SignupForm";
import { AuthInnerLayout } from "@/components/layouts";

const RegisterSreen: React.FC = () => {
  const { t } = useAppTranslation();
  const containerBackgroundColor = useThemeColor(
    { light: ColorPalette.whitish.liteBackground, dark: ColorPalette.dark.darkSecondary },
    "background"
  );

  return (
    <AuthInnerLayout>
      <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
        <View style={styles.headingContainer}>
          <ThemedTypography as="body-lg" colorName="headline" style={styles.signUpText}>
            {t("screens.signup_screen.sign_up")}
          </ThemedTypography>
          <View style={styles.signUpContainer}>
            <ThemedTypography
              as="paragraph"
              lightColor={ColorPalette.neutral.text.text3}
              darkColor={ColorPalette.neutral.text.text3}
              colorName="paragraph"
            >
              {t("screens.signup_screen.already_have_an_account")}{" "}
            </ThemedTypography>
            <AnimatedLink href="/">
              <ThemedTypography as="paragraph" colorName="link">
                {t("screens.signup_screen.sign_in")}
              </ThemedTypography>
            </AnimatedLink>
          </View>
        </View>
        <View style={styles.formContainer}>
          <Button block variant="outline" size="lg">
            <Google />
            <ThemedTypography as="text" colorName="outlineButton" style={styles.signUpButtonText}>
              {t("screens.signup_screen.sign_up_with_google")}
            </ThemedTypography>
          </Button>
          <ThemedTypography
            as="paragraph"
            lightColor={ColorPalette.neutral.text.text3}
            darkColor={ColorPalette.neutral.text.text3}
            colorName="paragraph"
            style={styles.signUpWithEmailText}
          >
            {t("screens.signup_screen.or_sign_up_with_email")}
          </ThemedTypography>
          <SignupForm />
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
  signUpText: {
    textTransform: "capitalize"
  },
  signUpWithEmailText: {
    textAlign: "center"
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

export default RegisterSreen;
