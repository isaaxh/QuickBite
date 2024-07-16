import { useAuth } from "@/hooks/useAuth";
import { AuthContextProps } from "@/services/providers/AuthProvider";
import { Stack } from "expo-router";

export default function CartLayout() {
  return <CartLayoutNav />;
}

function CartLayoutNav() {
  const { user } = useAuth() as AuthContextProps;
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="CartScreen" />
      <Stack.Screen name="CheckoutScreen" />
    </Stack>
  );
}
