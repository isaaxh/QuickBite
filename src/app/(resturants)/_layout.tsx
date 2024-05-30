import { Stack } from "expo-router";

export default function ResturantsLayout() {
  return <ResturantsLayoutNav />;
}

function ResturantsLayoutNav() {
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
