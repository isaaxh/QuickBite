import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { COLORS } from "@/constants/Colors";
import { ArrowDown2 } from "iconsax-react-native";

export default function DerliverToLink() {
  return (
    <>
      <Text
        className="text-black-100 "
        style={{ fontFamily: "Gilory-SemiBold", fontSize: 20 }}
      >
        Deliver to:
      </Text>
      <Link href="/(tabs)/home/SelectLocationScreen" asChild>
        <TouchableOpacity className="flex-row items-center">
          <Text
            style={{ fontSize: 12, fontFamily: "Gilory-Medium" }}
            className="text-black-500 mr-2"
          >
            08776 Serenity Ports, New York
          </Text>
          <ArrowDown2 size="16" color={COLORS["black-500"]} />
        </TouchableOpacity>
      </Link>
    </>
  );
}
