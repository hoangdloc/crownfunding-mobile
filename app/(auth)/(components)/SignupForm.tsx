import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppTranslation } from "@/hooks";
import { signupSchema, SignupValues } from "@/validators/auth";
import { Button, Form, Input, InputPassword, Typography } from "@/components/ui";
import { ms } from "react-native-size-matters";
import { ColorPalette } from "@/constants";

const SignupForm: React.FC = () => {
  const { t } = useAppTranslation();
  const form = useForm<SignupValues>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      termsAndConditions: false
    },
    resolver: zodResolver(signupSchema)
  });
  const inputEmailRef = useRef<React.ElementRef<typeof Input>>(null);
  const inputPasswordRef = useRef<React.ElementRef<typeof InputPassword>>(null);

  const { control, handleSubmit } = form;

  const onSubmit = handleSubmit((values: SignupValues) => {
    console.log("Form submitted with values:", values);
  });

  return (
    <Form.Root {...form}>
      <View style={styles.formContainer}>
        <Form.Field
          control={control}
          name="fullName"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{t("screens.signup_screen.full_name")} *</Form.Label>
              <Form.Control>
                <Input
                  placeholder={t("screens.signup_screen.full_name_placeholder")}
                  onChangeText={text => field.onChange(text)}
                  value={field.value}
                  returnKeyType="next"
                  onSubmitEditing={() => inputEmailRef.current?.focus()}
                  submitBehavior="submit"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={control}
          name="email"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{t("screens.signup_screen.email")} *</Form.Label>
              <Form.Control>
                <Input
                  ref={inputEmailRef}
                  placeholder={t("screens.signup_screen.email_placeholder")}
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
              <Form.Label>{t("screens.signup_screen.password")} *</Form.Label>
              <Form.Control>
                <InputPassword
                  ref={inputPasswordRef}
                  placeholder={t("screens.signup_screen.password_placeholder")}
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
      <Button variant="primary" block size="lg" onPress={onSubmit}>
        <Typography style={styles.createAccountText}>
          {t("screens.signup_screen.create_account")}
        </Typography>
      </Button>
    </Form.Root>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  formContainer: {
    gap: ms(15)
  },
  createAccountText: {
    fontSize: 16,
    fontWeight: "semibold",
    color: ColorPalette.whitish.pureWhite
  }
});
