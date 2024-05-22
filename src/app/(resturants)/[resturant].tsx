import { View, SectionList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import ResturantTopSection from "@/components/ResturantTopSection";
import { useResturantContext } from "@/hooks/useResturantContext";
import ResturantInfoSection from "@/components/ResturantInfoSection";
import UIText from "@/components/ui/UIText";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ResturantSections from "@/components/ResturantSections";

const sections = [
  {
    name: "Combo deals",
    data: [
      {
        id: 1,
        name: "Kings Deal",
        description:
          "Any medium classic pizza + a chocolate pizza + a pet drink",
        price: 20.34,
        imgUrl: "some url here",
      },
    ],
  },
  {
    name: "Classic Pizza",
    data: [
      {
        id: 1,
        name: "BBQ Chicken",
        description: "Pizza coated with BBQ sauce, cheese & grilled cheese",
        price: 12.34,
        imgUrl: "some url here",
      },
      {
        id: 2,
        name: "BBQ Beef",
        description: "Pizza coated with BBQ sauce, cheese & topped with beef",
        price: 11.34,
        imgUrl: "some url here",
      },
      {
        id: 3,
        name: "Vegie Supreme",
        description: "Pizza coated with BBQ sauce, cheese & vegetable toppings",
        price: 8.34,
        imgUrl: "some url here",
      },
    ],
  },
  {
    name: "Premium Pizza",
    data: [
      {
        id: 1,
        name: "BBQ Mega",
        description:
          "BBQ sauce, chicken, meatballs, smoked suasages & pepperoni",
        price: 18.75,
        imgUrl: "some url here",
      },
      {
        id: 2,
        name: "Chicken Bali",
        description:
          "Tomato sauce, cheese, grilled chicken, pineapple & mushrooms",
        price: 14.99,
        imgUrl: "some url here",
      },
      {
        id: 3,
        name: "Extravanganzza",
        description:
          "Tomato sauce, cheese, pepper, pepperoni, beef, onions & olives",
        price: 19.99,
        imgUrl: "some url here",
      },
    ],
  },
  {
    name: "Sides",
    data: [
      {
        id: 1,
        name: "Chicken Wings",
        description: "Choose from - 6pcs, 2pcs or 18pcs",
        price: 20.34,
        imgUrl: "some url here",
      },
      {
        id: 2,
        name: "French Fries",
        description: "Choose from - extra large, large or medium",
        price: 8.5,
        imgUrl: "some url here",
      },
    ],
  },
  {
    name: "Drinks",
    data: [
      {
        id: 1,
        name: "Soda",
        description: "Choose from a wide range of soda drinks",
        price: 11.39,
        imgUrl: "some url here",
      },
      {
        id: 2,
        name: "Water",
        description: "Choose from overpriced tap water",
        price: 9.99,
        imgUrl: "some url here",
      },
    ],
  },
];

export default function ResturantScreen() {
  const { id } = useLocalSearchParams();
  const resturants = useResturantContext();
  const resturant = resturants.filter(
    (resturant) => resturant.id.toString() === id,
  )[0];
  const [index, setIndex] = useState(0);

  console.log(resturant.sections);

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
        <View className="py-2 px-4">
          <SectionList
            sections={sections}
            keyExtractor={(item) => item.id + item.name}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <>
                <ProductCard
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  imgUrl={item.imgUrl}
                />
              </>
            )}
            renderSectionHeader={({ section: { name } }) => (
              <UIText
                variant="header4"
                textStyles="text-left text-gray-400 mt-2 mb-3"
              >
                {name}
              </UIText>
            )}
          />
        </View>
      </View>
    </View>
  );
}
