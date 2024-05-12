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

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} className="flex-1 items-center">
      <Header />
      <TextTitle>Food that will blow your mind!</TextTitle>
      <TextSubTitle>Order from +400 top resturants</TextSubTitle>
      <TextBody>
        This resturant was established in 1980s. The home for veterens are here
        to eat and dine all summer.
      </TextBody>
      <Text className="bg-red-100">Home tab</Text>
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
