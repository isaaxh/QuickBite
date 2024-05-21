import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import ResturantTopSection from "@/components/ResturantTopSection";
import { useResturantContext } from "@/hooks/useResturantContext";

export default function ResturantScreen() {
  const { id } = useLocalSearchParams();
  const resturants = useResturantContext();
  const resturant = resturants.filter(
    (resturant) => resturant.id.toString() === id,
  )[0];

  return (
    <View className="bg-orange-300 flex-1">
      <ResturantTopSection imgUrl={resturant.imgUrl as string} />
      <Text>{resturant.name}</Text>
    </View>
  );
}
