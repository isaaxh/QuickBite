import { View } from "react-native";
import React from "react";
import LoginForm from "@/components/LoginForm";

const LoginScreen = () => {
  return (
    <View className="flex-1 bg-background">
      <LoginForm />
    </View>
  );
};

export default LoginScreen;
