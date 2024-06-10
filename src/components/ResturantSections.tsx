import { View, FlatList } from "react-native";
import React, { useEffect, useRef } from "react";
import UIButton from "./ui/UIButton";
import UIText from "./ui/UIText";
import { TSection } from "@/utils/types";

const ITEM_WIDTH = 125;

interface ResturantSectionsProps {
  sections: TSection[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ResturantSections = (props: ResturantSectionsProps) => {
  const { index, sections, setIndex } = props;
  const ref = useRef<FlatList>(null);

  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      viewPosition: 0.5,
      viewOffset: 30,
    });
  }, [index]);

  return (
    <View className="pb-2">
      <FlatList
        ref={ref}
        data={sections}
        keyExtractor={(item) => item.id}
        horizontal
        /* getItemLayout={(data, index) => { */
        /*   return { index, length: ITEM_WIDTH, offset: ITEM_WIDTH * index }; */
        /* }} */
        /* onScrollToIndexFailed={} */
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index: fIndex }) => {
          return (
            <>
              <UIButton
                variant="bare"
                size="small"
                onPress={() => {
                  setIndex(fIndex);
                }}
                buttonStyles={
                  index === fIndex ? "border-b border-gray-400" : "border-0"
                }
              >
                <UIText
                  variant="body3"
                  textStyles={
                    index === fIndex ? "text-black" : "text-gray-400 border-0"
                  }
                >
                  {item.title}
                </UIText>
              </UIButton>
            </>
          );
        }}
      />
    </View>
  );
};

export default ResturantSections;
