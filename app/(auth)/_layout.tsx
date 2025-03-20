import { Stack } from "expo-router";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { ms, vs } from "react-native-size-matters";
import { SafeAreaView } from "@/components/ui";
import { AppImages } from "@/assets/images";
import { useThemeColor } from "@/hooks";
import { BorderRadius, ColorPalette } from "@/constants";

const AuthLayout: React.FC = () => {
  const containerBackgroundColor = useThemeColor(
    { light: ColorPalette.whitish.liteBackground, dark: ColorPalette.dark.darkBg },
    "background"
  );
  const screenContentBackgroundColor = useThemeColor(
    { light: ColorPalette.whitish.liteBackground, dark: ColorPalette.dark.darkSecondary },
    "background"
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Image style={styles.logo} source={AppImages.logo} />
        </View>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: [styles.screenContent, { backgroundColor: screenContentBackgroundColor }]
          }}
          initialRouteName="index"
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="register" />
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flexGrow: 1,
    padding: ms(24),
    gap: vs(20)
  },
  logo: {
    height: ms(40),
    width: ms(40)
  },
  screenContent: {
    borderRadius: BorderRadius.md
  }
});
