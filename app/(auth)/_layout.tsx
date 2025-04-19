import { Link, Stack } from "expo-router";
import { Button, Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { ms, mvs, vs } from "react-native-size-matters";
import { ThemedSafeAreaView } from "@/components/ui";
import { AppImages } from "@/assets/images";

const AuthLayout: React.FC = () => {
  return (
    <ThemedSafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Link href="/" asChild style={styles.link}>
          <Pressable>
            <Image style={styles.logo} source={AppImages.logo} />
          </Pressable>
        </Link>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: styles.stackContent,
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
          <Stack.Screen name="forgot-password" />
        </Stack>
      </ScrollView>
    </ThemedSafeAreaView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    gap: vs(20),
    marginHorizontal: ms(24)
  },
  link: {
    marginTop: ms(24)
  },
  logo: {
    height: ms(40),
    width: ms(40)
  },
  stackContent: {
    backgroundColor: "transparent",
    flexGrow: 1,
    marginBottom: ms(24)
  }
});
