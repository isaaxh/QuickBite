import { View } from "react-native";
import React from "react";
import MyResturantCardList from "@/components/MyResturantCardList";
import { COLORS } from "@/constants/Colors";

export default function AllResturants() {
  return (
    <View
      style={{ backgroundColor: COLORS.background }}
      className="items-center py-5"
    >
      <MyResturantCardList />
    </View>
  );
}
