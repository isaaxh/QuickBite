import { COLORS } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontFamily: "Gilory-Bold",
    fontSize: 24,
    color: COLORS["black-100"],
    marginTop: 6,
    marginBottom: 2,
  },
  subTitle: {
    fontFamily: "Gilory-Medium",
    fontSize: 18,
  },
  body: {
    fontFamily: "Gilory-SemiBold",
    fontSize: 13,
    color: COLORS["black-500"],
  },
});
