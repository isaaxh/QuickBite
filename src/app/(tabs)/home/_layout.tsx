import { Stack } from "expo-router";
import { useEffect } from "react";

export default function HomeLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="selectLocation"
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="AllResturants"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
