import { StyleSheet, Button } from "react-native";
import { Text, View } from "@/components/Themed";
import Header from "@/components/Header";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import TextTitle from "@/components/ui/texts/TextTitle";
import TextSubTitle from "@/components/ui/texts/TextSubTitle";
import TextBody from "@/components/ui/texts/TextBody";
import { COLORS } from "@/constants/Colors";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-background flex-1 items-center">
      <Header />
      <View className="bg-red-100 p-3 m-12 rounded-2xl w-full items-center">
        <Link href="/SplashScreen">
          <Text>Splash Screen</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
