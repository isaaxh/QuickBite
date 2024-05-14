import { FlatList } from "react-native";
import React from "react";
import RESTURANTS from "@/assets/data/resturants";
import ResturantCard from "@/components/ResturantCard";

export default function MyResturantCardList() {
  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: 80 }}
      data={RESTURANTS}
      renderItem={({ item }) => <ResturantCard resturant={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
