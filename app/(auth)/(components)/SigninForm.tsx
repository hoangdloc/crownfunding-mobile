import React, { useRef } from "react";
import { View, Text } from "react-native";
import { useForm } from "react-hook-form";
import { ms } from "react-native-size-matters";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppTranslation } from "@/hooks";
import {
  AnimatedLink,
  Button,
  Form,
  Input,
  InputPassword,
  ThemedTypography,
  Typography
} from "@/components/ui";
import { SigninSchema, SigninValues } from "@/validators/auth";
import { StyleSheet } from "react-native";
import { ColorPalette } from "@/constants";

const SigninForm: React.FC = () => {
  const { t } = useAppTranslation();
  const form = useForm<SigninValues>({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: zodResolver(SigninSchema)
  });
  const inputPasswordRef = useRef<React.ElementRef<typeof InputPassword>>(null);

  const { control, handleSubmit } = form;

  const onSubmit = handleSubmit((values: SigninValues) => {
    console.log("Form submitted with values:", values);
  });

  return (
    <Form.Root {...form}>
      <View style={styles.formContainer}>
        <Form.Field
          control={control}
          name="email"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{t("screens.login_screen.email")} *</Form.Label>
              <Form.Control>
                <Input
                  placeholder="example@gmail.com"
                  onChangeText={text => field.onChange(text)}
                  value={field.value}
                  returnKeyType="next"
                  onSubmitEditing={() => inputPasswordRef.current?.focus()}
                  submitBehavior="submit"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={control}
          name="password"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{t("screens.login_screen.password")} *</Form.Label>
              <Form.Control>
                <InputPassword
                  ref={inputPasswordRef}
                  placeholder={t("screens.login_screen.password_placeholder")}
                  value={field.value}
                  returnKeyType="done"
                  submitBehavior="blurAndSubmit"
                  onChangeText={text => field.onChange(text)}
                  onSubmitEditing={onSubmit}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </View>
      <AnimatedLink href="/forgot-password" style={styles.forgotPasswordLink}>
        <ThemedTypography colorName="link" style={styles.forgotPasswordText}>
          {t("screens.login_screen.forgot_password")}
        </ThemedTypography>
      </AnimatedLink>
      <Button variant="primary" block size="lg" onPress={onSubmit}>
        <Typography style={styles.signUpButtonText}>{t("screens.login_screen.sign_in")}</Typography>
      </Button>
    </Form.Root>
  );
};

export default SigninForm;

const styles = StyleSheet.create({
  formContainer: {
    gap: ms(15)
  },
  forgotPasswordLink: {
    alignSelf: "flex-end",
    marginTop: ms(10),
    marginBottom: ms(20)
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: "medium"
  },
  signUpButtonText: {
    fontSize: 16,
    fontWeight: "semibold",
    color: ColorPalette.whitish.pureWhite
  }
});
