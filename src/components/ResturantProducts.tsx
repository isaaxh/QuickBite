import { SectionList } from "react-native";
import React, { useEffect, useRef } from "react";
import { IRestaurant } from "@/utils/types";
import ProductCard from "./ProductCard";
import UIText from "./ui/UIText";

const ITEM_HEIGHT = 120;

interface ResturantProductsProps {
  index: number;
  resturant: IRestaurant;
}

const ResturantProducts = ({ index, resturant }: ResturantProductsProps) => {
  const ref = useRef<SectionList>(null);

  useEffect(() => {
    ref.current?.scrollToLocation({
      sectionIndex: index,
      itemIndex: 0,
    });
  }, [index]);
  return (
    <SectionList
      className="px-3"
      ref={ref}
      sections={resturant.sections}
      keyExtractor={(item) => item.id + item.name}
      showsVerticalScrollIndicator={false}
      getItemLayout={(data, index) => {
        return {
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        };
      }}
      renderItem={({ item }) => (
        <ProductCard
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          imgUrl={item.imgUrl}
          ITEM_HEIGHT={ITEM_HEIGHT}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <UIText variant="header4" textStyles="text-left text-gray-400 mt-1">
          {title}
        </UIText>
      )}
    />
  );
};

export default ResturantProducts;
