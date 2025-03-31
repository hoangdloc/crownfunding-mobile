import { EyeOff, EyeOn, Input } from "@/components/ui";
import { InputPassword } from "@/components/ui/input/password";
import { useAppTranslation } from "@/hooks";
import { Text, View } from "react-native";

const SigninForm: React.FC = () => {
  const { t } = useAppTranslation();

  return (
    <View>
      <Input placeholder="example@gmail.com" />
      <InputPassword placeholder={t("screens.login_screen.password_placeholder")} />
    </View>
  );
};

export default SigninForm;
