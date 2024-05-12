import { Text } from "react-native";
import React from "react";
import TextStyles from "./TextStyles";

type TextProps = {
  children: React.ReactNode;
};

export default function TextTitle({ children, ...props }: TextProps) {
  return (
    <Text style={TextStyles.title} {...props}>
      {children}
    </Text>
  );
}
