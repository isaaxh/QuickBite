import { Stack } from "expo-router";
import { useEffect } from "react";

export default function HomeLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SelectLocationScreen"
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="AllResturantScreen"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
