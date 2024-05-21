import { View } from "react-native";
import React from "react";
import UIText from "./ui/UIText";
import Ratings from "@/components/Ratings";
import Distance from "./Distance";

type ResturantInfoSectionProps = {
  name: string;
  deliveryTime: string;
  rating: number;
  distance: number;
};

const ResturantInfoSection = ({
  name,
  deliveryTime,
  rating,
  distance,
}: ResturantInfoSectionProps) => {
  return (
    <View className="px-4 py-3">
      <View className="flex-row items-center justify-between">
        <UIText variant="header2">{name}</UIText>
        <UIText variant="header4">{deliveryTime} delivery</UIText>
      </View>
      <View className="flex-row mt-2 items-center justify-between">
        <Ratings rating={rating} iconSize={14} />
        <Distance distance={distance} />
      </View>
    </View>
  );
};

export default ResturantInfoSection;
