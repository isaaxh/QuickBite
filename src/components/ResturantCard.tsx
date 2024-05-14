import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ratings from "./Ratings";
import Distance from "./Distance";

type ResturantCardProps = {
  resturant: {
    id: number;
    name: string;
    distance: number;
    ratings: number;
    imgUrl: string;
  };
};

const ResturantCard = ({ resturant }: ResturantCardProps) => {
  const resturantImg = {
    uri: resturant.imgUrl,
    width: 380,
    height: 200,
  };
  return (
    <View className="my-5">
      <TouchableOpacity className="mb-6">
        <Image source={resturantImg} className="rounded-3xl" />
        <Text
          style={{ fontFamily: "Gilory-SemiBold", fontSize: 20 }}
          className="mt-3"
        >
          {resturant.name}
        </Text>
        <View className="flex-row justify-between mt-2">
          <Ratings />
          <Distance distance={resturant.distance} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ResturantCard;
