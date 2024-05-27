import React from "react";
import MyResturantCardList from "@/components/MyResturantCardList";
import { View } from "react-native";

export default function AllResturants() {
  return (
    <View className="items-center py-6 bg-background">
      <MyResturantCardList />
    </View>
  );
}
