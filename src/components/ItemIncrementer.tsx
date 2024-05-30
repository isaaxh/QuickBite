import { View } from "react-native";
import React, { Dispatch } from "react";
import UIButton from "./ui/UIButton";
import UIText from "./ui/UIText";

interface ItemIncrementerProps {
  itemNumber: number;
  setItemNumber: Dispatch<React.SetStateAction<number>>;
}

const ItemIncrementer = ({
  itemNumber,
  setItemNumber,
}: ItemIncrementerProps) => {
  return (
    <View className="bg-primary-100 flex-row justify-between items-center my-0 mr-3 px-4 py-1 w-1/3 rounded-full">
      <UIButton
        variant="bare"
        onPress={() => {
          if (itemNumber > 1) {
            setItemNumber((prev) => prev - 1);
          }
        }}
        buttonStyles={"px-2"}
      >
        -
      </UIButton>
      <UIText variant="header6">{itemNumber}</UIText>
      <UIButton
        variant="bare"
        onPress={() => setItemNumber((prev) => prev + 1)}
        buttonStyles={"px-2"}
      >
        +
      </UIButton>
    </View>
  );
};

export default ItemIncrementer;
