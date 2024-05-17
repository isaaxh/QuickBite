import { Stack } from "expo-router";
import { Button } from "react-native";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/Colors";

export default function ResturantsLayout() {
  return <ResturantsLayoutNav />;
}

function ResturantsLayoutNav() {
  const navigation = useNavigation();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AllResturantScreen"
        options={{ headerShown: true, headerTitle: "All Resturants" }}
      />
      <Stack.Screen name="[resturant]" />
    </Stack>
  );
}
