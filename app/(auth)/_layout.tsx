import { Link, Stack } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet } from "react-native";
import { ms, mvs, vs } from "react-native-size-matters";
import { ThemedSafeAreaView } from "@/components/ui";
import { AppImages } from "@/assets/images";
import { useThemeColor } from "@/hooks";
import { BorderRadius, ColorPalette } from "@/constants";

const AuthLayout: React.FC = () => {
  const screenContentBackgroundColor = useThemeColor(
    { light: ColorPalette.whitish.liteBackground, dark: ColorPalette.dark.darkSecondary },
    "background"
  );

  return (
    <ThemedSafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Link href="/" asChild>
          <Pressable>
            <Image style={styles.logo} source={AppImages.logo} />
          </Pressable>
        </Link>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: [styles.screenContent, { backgroundColor: screenContentBackgroundColor }],
            gestureEnabled: true,
            gestureDirection: "horizontal",
            animation: "slide_from_right",
            gestureResponseDistance: {
              top: mvs(100),
              bottom: mvs(100)
            }
          }}
          initialRouteName="index"
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="register" />
        </Stack>
      </ScrollView>
    </ThemedSafeAreaView>
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
