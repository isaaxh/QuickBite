import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "./Icon";
import { COLORS } from "@/constants/Colors";
import { Link } from "expo-router";

export default function Header() {
  return (
    <View className="flex-row justify-between w-full px-4 py-4">
      <View>
        <Text
          className="text-black-100 "
          style={{ fontFamily: "Gilory-SemiBold", fontSize: 20 }}
        >
          Deliver to:
        </Text>
        <Text
          style={{ fontSize: 12, fontFamily: "Gilory-Medium" }}
          className="text-black-500 mt-1"
        >
          08776 Serenity Ports, New York
        </Text>
      </View>
      <Link href={"/profile"} asChild>
        <TouchableOpacity
          style={{ backgroundColor: "#ecce99" }}
          className="p-2 rounded-2xl inline-block justify-center items-center"
        >
          <Icon name="profile" color={COLORS["black-100"]} />
        </TouchableOpacity>
      </Link>
    </View>
  );
}
