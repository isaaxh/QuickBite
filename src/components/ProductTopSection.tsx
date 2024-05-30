import { View, Image } from "react-native";
import React from "react";
import NavButton from "./NavButton";
import UIText from "./ui/UIText";
import { IProduct } from "@/utils/types";

interface ProductionTopSectionProps {
  product: IProduct;
}

const ProductTopSection = ({ product }: ProductionTopSectionProps) => {
  const productImg = {
    uri: product.imgUrl,
    height: 230,
    width: 600,
  };
  return (
    <>
      <View className="absolute z-50 top-8 left-5">
        <NavButton variant="cancel" />
      </View>
      <View className="items-center">
        <Image source={productImg} />
      </View>
      <View className="px-3 mb-2">
        <UIText variant={"header"} textStyles="text-left mt-2 mb-0">
          {product.name}
        </UIText>
        <UIText variant={"body2"} textStyles="text-left">
          {product.description}
        </UIText>
      </View>
    </>
  );
};

export default ProductTopSection;
