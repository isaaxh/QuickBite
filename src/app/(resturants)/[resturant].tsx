import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import ResturantTopSection from "@/components/ResturantTopSection";
import { useResturantContext } from "@/hooks/useResturantContext";
import ResturantInfoSection from "@/components/ResturantInfoSection";
import { useState } from "react";
import ResturantSections from "@/components/ResturantSections";
import { TRestaurant } from "@/utils/types";
import ResturantProducts from "@/components/ResturantProducts";

export default function ResturantScreen() {
  const { id } = useLocalSearchParams();
  const resturants: TRestaurant[] = useResturantContext() as TRestaurant[];
  const resturant: TRestaurant = resturants.filter(
    (resturant) => resturant.id.toString() === id,
  )[0];
  const [index, setIndex] = useState(0);

  return (
    <View className="bg-background flex-1">
      <ResturantTopSection imgUrl={resturant.imgUrl as string} />
      <ResturantInfoSection
        name={resturant.name}
        deliveryTime={resturant.deliveryTime}
        rating={resturant.rating}
        distance={resturant.distance}
      />
      <View className="flex-1 mt-2 pt-2">
        <ResturantSections
          index={index}
          setIndex={setIndex}
          sections={resturant.sections}
        />
        <ResturantProducts index={index} resturant={resturant} />
      </View>
    </View>
  );
}
