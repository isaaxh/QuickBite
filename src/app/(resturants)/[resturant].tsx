import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import ResturantTopSection from "@/components/ResturantTopSection";
import { useResturantContext } from "@/hooks/useResturantContext";
import UIText from "@/components/ui/UIText";
import Distance from "@/components/Distance";
import Ratings from "@/components/Rating";
import ResturantInfoSection from "@/components/ResturantInfoSection";

export default function ResturantScreen() {
  const { id } = useLocalSearchParams();
  const resturants = useResturantContext();
  const resturant = resturants.filter(
    (resturant) => resturant.id.toString() === id,
  )[0];

  return (
    <View className="bg-background flex-1">
      <ResturantTopSection imgUrl={resturant.imgUrl as string} />
      <ResturantInfoSection
        name={resturant.name}
        deliveryTime={resturant.deliveryTime}
        rating={resturant.rating}
        distance={resturant.distance}
      />
    </View>
  );
}
