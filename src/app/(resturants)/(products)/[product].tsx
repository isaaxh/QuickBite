import { View } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import useProduct from "@/hooks/useProduct";
import ProductTopSection from "@/components/ProductTopSection";
import ProductBottomSection from "@/components/ProductBottomSection";

const ProductScreen = () => {
  const { id, resturantId, sectionId } = useLocalSearchParams<{
    id: string;
    resturantId: string;
    sectionId: string;
  }>();

  // refactor this code better

  const { product } = useProduct({
    id: id !== undefined ? id : "1",
    resturantId: resturantId !== undefined ? resturantId : "1",
    sectionId: sectionId !== undefined ? sectionId : "1",
  });

  const [itemNumber, setItemNumber] = useState(1);

  return (
    <View className="flex-1 bg-background">
      <ProductTopSection product={product} />
      <View className="flex-1"></View>
      <ProductBottomSection
        productPrice={product.price}
        itemNumber={itemNumber}
        setItemNumber={setItemNumber}
      />
    </View>
  );
};

export default ProductScreen;
