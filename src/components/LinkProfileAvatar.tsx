import { TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Profile } from "iconsax-react-native";
import { COLORS } from "@/constants/Colors";

export default function LinkProfileAvatar() {
  return (
    <Link href={"/profile"} asChild>
      <TouchableOpacity
        style={{ backgroundColor: "#ecce99" }}
        className="p-2 rounded-2xl inline-block justify-center items-center"
      >
        <Profile size={24} color={COLORS["black-100"]} />
      </TouchableOpacity>
    </Link>
  );
}
