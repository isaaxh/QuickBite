import { Stack } from "expo-router";

export default function ProductsLayout() {
  return <ProductsLayoutNav />;
}

function ProductsLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="[product]" />
    </Stack>
  );
}
