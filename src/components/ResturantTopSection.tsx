import { View, Text, Image } from "react-native";
import React from "react";
import NavButton from "./NavButton";

type ResturantTopSectionProps = { imgUrl: string };

const ResturantTopSection = ({ imgUrl }: ResturantTopSectionProps) => {
  const resturantImg = {
    uri: imgUrl as string,
    width: 450,
    height: 250,
  };
  return (
    <>
      <View className="absolute z-50 top-10 left-5">
        <NavButton variant="back" />
      </View>
      <View>
        <Image source={resturantImg} />
        <View
          className="absolute bottom-5 left-5 rounded-xl px-6 py-2"
          style={{ backgroundColor: "#00000088" }}
        >
          <Text
            style={{ fontFamily: "Gilory-SemiBold", fontSize: 11 }}
            className="text-white"
          >
            Free delivery on orders above $50
          </Text>
        </View>
      </View>
    </>
  );
};

export default ResturantTopSection;
