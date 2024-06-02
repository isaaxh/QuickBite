import { View, Text } from "react-native";
import React, { Dispatch } from "react";
import ItemIncrementer from "./ItemIncrementer";
import UIButton from "./ui/UIButton";
import UIText from "./ui/UIText";

interface ProductBottomSectionProps {
  productPrice: number;
  itemNumber: number;
  setItemNumber: Dispatch<React.SetStateAction<number>>;
}

const ProductBottomSection = ({
  productPrice,
  itemNumber,
  setItemNumber,
}: ProductBottomSectionProps) => {
  return (
    <>
      <View className="flex-row items-center py-4 px-3 justify-between">
        <ItemIncrementer
          itemNumber={itemNumber}
          setItemNumber={setItemNumber}
        />
        <UIButton
          variant={"fill"}
          multiText={true}
          text2={
            <UIText variant={"header6"}>
              $ {(productPrice * itemNumber).toFixed(2)}
            </UIText>
          }
          containerStyles="flex-1"
          buttonStyles={"rounded-xl flex-row flex-1 py-3 px-4 justify-between"}
        >
          <Text>Add to bag</Text>
        </UIButton>
      </View>
    </>
  );
};

export default ProductBottomSection;
