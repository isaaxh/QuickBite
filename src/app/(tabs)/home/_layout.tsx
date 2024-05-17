import { Stack } from "expo-router";

export default function HomeLayout() {
  return <HomeLayoutNav />;
}

function HomeLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SelectLocationScreen"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
