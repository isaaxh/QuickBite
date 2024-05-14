import { View, Text } from "react-native";
import React from "react";
import Icon from "./Icon";
import { COLORS } from "@/constants/Colors";

type RatingsProps = {
  rating: number;
};

export default function Ratings({ rating }: RatingsProps) {
  let hasHalfStar = false;
  if (rating.toString()[1]) {
    hasHalfStar = true;
    console.log(rating.toString()[2]);
  }
  const wholeRating = Number(rating.toString().substr(0, 1));
  console.log("wholeRating", wholeRating);
  return (
    <View className="flex-row gap-2">
      {new Array(wholeRating).fill("").map((_, index) => (
        <Icon key={index} name="star" size={16} color={COLORS.yellow} />
      ))}
      {hasHalfStar && <Icon name="star-half" size={16} color={COLORS.yellow} />}
    </View>
  );
}
