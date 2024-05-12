import { COLORS } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontFamily: "Gilory-Bold",
    fontSize: 24,
    color: COLORS["black-100"],
    marginTop: 16,
    marginBottom: 6,
  },
  subTitle: {
    fontFamily: "Gilory-Medium",
    fontSize: 18,
    marginTop: 8,
    marginBottom: 2,
  },
  body: {
    fontFamily: "Gilory-SemiBold",
    fontSize: 13,
    color: COLORS["black-500"],
    textAlign: "center",
    lineHeight: 16,
  },
});
