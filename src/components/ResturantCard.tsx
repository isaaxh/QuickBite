import { View, Image, Pressable } from "react-native";
import React from "react";
import Distance from "./Distance";
import { Link } from "expo-router";
import UIText from "./ui/UIText";
import Ratings from "@/components/Ratings";
import { IRestaurant } from "@/utils/types";

interface ResturantCardProps {
  resturant: IRestaurant;
}

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
          params: { id: resturant.id },
        }}
        asChild
      >
        <Pressable>
          <Image source={resturantImg} className="rounded-3xl" />
          <UIText variant="header2" textStyles="mt-1 text-left">
            {resturant.name}
          </UIText>
          <View className="flex-row justify-between mt-2">
            <Ratings rating={resturant.rating} />
            <Distance distance={resturant.distance} />
          </View>
        </Pressable>
      </Link>
    </View>
  );
};

export default ResturantCard;
