import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { mvs } from "react-native-size-matters";

const AuthLayout: React.FC = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: styles.stackContent,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        animation: "none",
        gestureResponseDistance: {
          top: mvs(100),
          bottom: mvs(100)
        }
      }}
      initialRouteName="sign-in/index"
    >
      <Stack.Screen name="sign-in/index" />
      <Stack.Screen name="register/index" />
      <Stack.Screen name="forgot-password/index" />
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  stackContent: {
    backgroundColor: "transparent",
    flexGrow: 1
  }
});
