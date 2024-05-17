import { View, Text, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import BackButton from "@/components/BackButton";
import ResturantTopSection from "@/components/ResturantTopSection";

type TResturant = {
  id: number;
  name: string;
  distance: number;
  rating: number;
  imgUrl: string;
};

export default function ResturantScreen() {
  const resturant = useLocalSearchParams();

  return (
    <View className="bg-orange-300 flex-1">
      <ResturantTopSection imgUrl={resturant.imgUrl as string} />
      <Text>{resturant.name}</Text>
    </View>
  );
}
