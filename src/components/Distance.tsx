import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";

type DistanceProps = {
  distance: number;
};

export default function Distance({ distance }: DistanceProps) {
  return (
    <Text
      style={{
        fontFamily: "Gilory-SemiBold",
        fontSize: 13,
        color: COLORS["black-500"],
      }}
    >
      {distance}km away
    </Text>
  );
}
