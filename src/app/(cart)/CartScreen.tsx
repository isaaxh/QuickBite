import { View, Text } from "react-native";
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { AuthContextProps } from "@/services/providers/AuthProvider";
import RequireAuth from "../RequireAuth";

const CartScreen = () => {
  const { user } = useAuth() as AuthContextProps;
  return (
    <View className="flex-1">
      {user ? <Text>CartScreen</Text> : <RequireAuth />}
    </View>
  );
};

export default CartScreen;
