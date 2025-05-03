import { StyleSheet, View } from "react-native";
import { ms, mvs } from "react-native-size-matters";
import { AuthInnerLayout } from "@/components/layouts";
import { BorderRadius, ColorPalette } from "@/constants";
import { useThemeColor } from "@/hooks";
import { useState } from "react";

export enum ForgotPasswordSteps {
  ENTER_EMAIL = 0,
  EMAIL_VERIFICATION = 1,
  RESET_PASSWORD = 2,
  SUCCESS = 3
}

const ForgotPasswordScreen: React.FC = () => {
  const [step, setStep] = useState(ForgotPasswordSteps.ENTER_EMAIL);
  const containerBackgroundColor = useThemeColor(
    { light: ColorPalette.whitish.liteBackground, dark: ColorPalette.dark.darkSecondary },
    "background"
  );

  return (
    <AuthInnerLayout>
      <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}></View>
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
  }
});

export default ForgotPasswordScreen;
