import { View, Text, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import BackButton from "@/components/BackButton";

type TResturant = {
  id: number;
  name: string;
  distance: number;
  rating: number;
  imgUrl: string;
};

export default function ResturantScreen() {
  const resturant = useLocalSearchParams();

  const resturantImg = {
    uri: resturant.imgUrl as string,
    width: 450,
    height: 250,
  };

  return (
    <View className="bg-orange-300 flex-1">
      <View className="absolute z-50 top-10 left-5">
        <BackButton />
      </View>
      <View>
        <Image source={resturantImg} />
        <View
          className="absolute bottom-5 left-5 rounded-xl px-6 py-2"
          style={{ backgroundColor: "#00000088" }}
        >
          <Text
            style={{ fontFamily: "Gilory-SemiBold", fontSize: 11 }}
            className="text-white"
          >
            Free delivery on orders above $50
          </Text>
        </View>
      </View>
      <Text>{resturant.name}</Text>
    </View>
  );
}
