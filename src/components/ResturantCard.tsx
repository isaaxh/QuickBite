import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import Distance from "./Distance";
import { Rating } from "react-native-ratings";
import { COLORS } from "@/constants/Colors";
import { Link, useLocalSearchParams } from "expo-router";

export type ResturantCardProps = {
  resturant: {
    id: number;
    name: string;
    distance: number;
    rating: number;
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
    <View className="mb-6">
      <Link
        href={{
          pathname: `/(resturants)/${resturant.id}`,
          params: resturant,
        }}
        asChild
      >
        <Pressable>
          <Image source={resturantImg} className="rounded-3xl" />
          <Text
            style={{ fontFamily: "Gilory-SemiBold", fontSize: 20 }}
            className="mt-1"
          >
            {resturant.name}
          </Text>
          <View className="flex-row justify-between mt-2">
            <Rating
              type="custom"
              ratingCount={5}
              readonly
              fractions={1}
              startingValue={resturant.rating}
              ratingColor={COLORS.yellow}
              imageSize={18}
            />
            <Distance distance={resturant.distance} />
          </View>
        </Pressable>
      </Link>
    </View>
  );
};

export default ResturantCard;
