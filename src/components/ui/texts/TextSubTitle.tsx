import { Text } from "react-native";
import React from "react";
import TextStyles from "./TextStyles";

type TextSubTitleProps = {
  children: React.ReactNode;
};

export default function TextSubTitle({ children }: TextSubTitleProps) {
  return (
    <Text style={TextStyles.subTitle}>Order from +400 top resturants</Text>
  );
}
