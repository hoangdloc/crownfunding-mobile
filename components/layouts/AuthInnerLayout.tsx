import { ScrollView, StyleSheet, Pressable, Image } from "react-native";
import { ms, vs, mvs } from "react-native-size-matters";
import { Link } from "expo-router";
import { ThemedSafeAreaView } from "../ui";
import { AppImages } from "@/assets/images";
import { KeyboardShift } from "../common";

type AuthInnerLayoutProps = {
  children?: React.ReactNode;
};

export const AuthInnerLayout: React.FC<AuthInnerLayoutProps> = ({ children }) => {
  return (
    <KeyboardShift>
      <ThemedSafeAreaView>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Link href="/" asChild>
            <Pressable>
              <Image style={styles.logo} source={AppImages.logo} />
            </Pressable>
          </Link>
          {children}
        </ScrollView>
      </ThemedSafeAreaView>
    </KeyboardShift>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    gap: vs(20),
    padding: ms(24)
  },
  logo: {
    height: mvs(40),
    width: mvs(40)
  }
});
