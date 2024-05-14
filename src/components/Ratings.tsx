import { View, Text } from "react-native";
import React from "react";

type RatingsProps = {
  rating: number;
};

export default function Ratings({ ratings }: RatingsProps) {
  return (
    <View>
      <Text>Ratings</Text>
    </View>
  );
}
