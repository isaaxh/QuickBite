import { FlatList } from "react-native";
import React from "react";
import RESTURANTS from "@/assets/data/resturants";
import ResturantCard from "@/components/ResturantCard";
import { IRestaurant } from "@/utils/types";

interface MyResturantCardListProps {
  popular: boolean;
}

export default function MyResturantCardList({
  popular,
}: MyResturantCardListProps) {
  const popularResturants: IRestaurant[] = RESTURANTS.filter(
    (resturant) => resturant.rating > 4.0,
  );

  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: 80 }}
      data={popular ? popularResturants : RESTURANTS}
      renderItem={({ item }) => <ResturantCard resturant={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
