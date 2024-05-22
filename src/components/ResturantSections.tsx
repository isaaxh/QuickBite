import { View, FlatList } from "react-native";
import React, { useEffect, useRef } from "react";
import UIButton from "./ui/UIButton";
import UIText from "./ui/UIText";

type ResturantSectionsProps = {
  index: number;
  sections:
    | {
        id: number;
        name: string;
        products: {
          id: number;
          name: string;
          description: string;
          price: number;
          imgUrl: string;
        }[];
      }[]
    | undefined;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ResturantSections = ({
  index,
  sections,
  setIndex,
}: ResturantSectionsProps) => {
  const ref = useRef<FlatList>(null);

  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  }, [index]);

  return (
    <View>
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        data={sections}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index: fIndex }) => {
          return (
            <UIButton
              variant="bare"
              size="small"
              onPress={() => setIndex(fIndex)}
              buttonStyles={
                index === fIndex ? "border-b border-gray-400 mx-2" : "border-0"
              }
            >
              <UIText
                variant="body3"
                textStyles={
                  index === fIndex ? "text-black" : "text-gray-400 border-0"
                }
              >
                {item.name}
              </UIText>
            </UIButton>
          );
        }}
      />
    </View>
  );
};

export default ResturantSections;
