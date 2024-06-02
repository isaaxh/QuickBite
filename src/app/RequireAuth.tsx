import { View } from "react-native";
import React from "react";
import UIButton from "@/components/ui/UIButton";
import UIText from "@/components/ui/UIText";
import { Link } from "expo-router";
import SvgComponent from "@/components/SvgComponent";

const RequireAuth = () => {
  return (
    <View className="flex-1 w-full items-center justify-center">
      <View className="items-center mb-4">
        <SvgComponent />
      </View>
      <View className="px-4 mb-6">
        <UIText variant="body">
          Uh oh! looks like you are not logged in. Click the button below to
          login or sign up
        </UIText>
      </View>
      <Link href="/(auth)/LoginScreen" asChild>
        <UIButton size="large" text="largeText">
          Login
        </UIButton>
      </Link>
    </View>
  );
};

export default RequireAuth;
