import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";
import TextTitle from "@/components/ui/texts/TextTitle";
import TextBody from "@/components/ui/texts/TextBody";
import UIButton from "@/components/ui/UIButton";
import { Link } from "expo-router";
import TestButton from "@/components/ui/texts/TestButton";

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

      {/* need to find a solution to use custom components with expo router links  */}
      <View className="mb-8 mx-5">
        <Link href={"/(tabs)/home"} asChild>
          <TouchableOpacity className="bg-primary-100 rounded-2xl py-4 items-center">
            <Text style={{ fontFamily: "Gilory-SemiBold", fontSize: 16 }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
