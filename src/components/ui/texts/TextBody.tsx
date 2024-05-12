import { Text, StyleSheet } from "react-native";
import React from "react";
import TextStyles from "./TextStyles";

type TextBodyProps = {
  children: React.ReactNode;
};

export default function TextBody({ children }: TextBodyProps) {
  return <Text style={TextStyles.body}>{children}</Text>;
}
