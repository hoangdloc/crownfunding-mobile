import { Stack } from "expo-router";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { ms, vs } from "react-native-size-matters";
import { SafeAreaView } from "@/components/ui";
import { AppImages } from "@/assets/images";

const AuthLayout: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={AppImages.logo}
          />
        </View>
        <View style={{ flexGrow: 1 }}>
          <Stack
            screenOptions={{ headerShown: false }}
            initialRouteName="index"
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="register" />
          </Stack>
        </View>
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
    flex: 1,
    gap: vs(20)
  },
  header: {},
  logo: {
    height: ms(40),
    width: ms(40)
  }
});
