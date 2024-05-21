import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";
import { LocationMinus } from "iconsax-react-native";
import UIText from "./ui/UIText";

type DistanceProps = {
  distance: number;
};

export default function Distance({ distance }: DistanceProps) {
  return (
    <View className="flex-row items-center gap-3">
      <LocationMinus size="18" color={COLORS["black-500"]} />
      <UIText variant="body3">{distance}km away</UIText>
    </View>
  );
}
