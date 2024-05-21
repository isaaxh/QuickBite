import { View, Image } from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";
import { Link } from "expo-router";
import UIButton from "@/components/ui/UIButton";
import UIText from "@/components/ui/UIText";

export default function OnBoardingScreen() {
  return (
    <View style={{ backgroundColor: COLORS.white }} className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center p-3">
        <Image source={require("../../assets/images/splash_screen.png")} />
        <UIText variant="header">Food to blow your mind!</UIText>
        <UIText variant="body2">
          Whether you're craving pizza, sushi or something in between, we have
          got your back.
        </UIText>
      </View>

      <Link href={"/(tabs)/home"} asChild>
        <UIButton variant="fill" size="large" containerStyles="mb-6">
          Get Started
        </UIButton>
      </Link>
    </View>
  );
}
