import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";
import TextTitle from "@/components/ui/texts/TextTitle";
import TextBody from "@/components/ui/texts/TextBody";
import { Link } from "expo-router";
import UIButton from "@/components/ui/UIButton";

export default function SplashScreen() {
  return (
    <View style={{ backgroundColor: COLORS.white }} className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center p-3">
        <Image source={require("../../assets/images/splash_screen.png")} />
        <TextTitle>Food to blow your mind!</TextTitle>
        <TextBody>
          Whether you're craving pizza, sushi or something in between, we have
          got your back.
        </TextBody>
      </View>

      <Link href={"/(tabs)/home"} asChild>
        <UIButton variant="fill" size="large" containerStyles="mb-6">
          Get Started
        </UIButton>
      </Link>
    </View>
  );
}
