import { View, Image, Pressable } from "react-native";
import React from "react";
import UIText from "@/components/ui/UIText";
import { IProduct } from "@/utils/types";
import { Link } from "expo-router";

interface ProductCardProps extends IProduct {
  ITEM_HEIGHT: number;
  resturantId: number;
  sectionId: string;
}

const url = "pizza_1.png";

const ProductCard = ({
  id,
  name,
  description,
  price,
  imgUrl,
  ITEM_HEIGHT,
  resturantId,
  sectionId,
}: ProductCardProps) => {
  const productImg = {
    uri: imgUrl,
    width: 90,
    height: 90,
  };

  return (
    <Link
      href={{
        pathname: `/(resturants)/(products)/${id}`,
        params: { id, sectionId, resturantId },
      }}
      asChild
    >
      <Pressable
        style={{ height: ITEM_HEIGHT }}
        className="flex-row items-center pr-2"
      >
        <View className="mr-3">
          <Image source={productImg} />
        </View>
        <View className="flex-1">
          <UIText variant="header5" textStyles="text-left">
            {name}
          </UIText>
          <UIText variant={"body2"} textStyles="mt-1 mr-1 text-left">
            {description}
          </UIText>
        </View>
        <View>
          <UIText>{price}</UIText>
        </View>
      </Pressable>
    </Link>
  );
};

export default ProductCard;
