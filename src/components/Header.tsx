import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "./Icon";
import { COLORS } from "@/constants/Colors";
import { Link } from "expo-router";
import { Profile } from "iconsax-react-native";

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
        <Link href="/(tabs)/home/selectLocation" asChild>
          <TouchableOpacity className="flex-row items-center">
            <Text
              style={{ fontSize: 12, fontFamily: "Gilory-Medium" }}
              className="text-black-500 mr-2"
            >
              08776 Serenity Ports, New York
            </Text>
            <Icon name="chevron-down" color={COLORS["black-500"]} />
          </TouchableOpacity>
        </Link>
      </View>
      <Link href={"/profile"} asChild>
        <TouchableOpacity
          style={{ backgroundColor: "#ecce99" }}
          className="p-2 rounded-2xl inline-block justify-center items-center"
        >
          <Profile size={24} color={COLORS["black-100"]} />
        </TouchableOpacity>
      </Link>
    </View>
  );
}
