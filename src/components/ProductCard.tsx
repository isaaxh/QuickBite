import { View, Image } from "react-native";
import React from "react";
import UIText from "@/components/ui/UIText";
import { IProduct } from "@/utils/types";

interface ProductCardProps extends IProduct {
  ITEM_HEIGHT: number;
}

const url = "pizza_1.png";

const ProductCard = ({
  name,
  description,
  price,
  imgUrl,
  ITEM_HEIGHT,
}: ProductCardProps) => {
  const productImg = {
    uri: imgUrl,
    width: 90,
    height: 90,
  };
  return (
    <View
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
    </View>
  );
};

export default ProductCard;
