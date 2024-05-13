import { View } from "react-native";
import React from "react";
import LinkDeliverTo from "./LinkDeliverTo";
import LinkProfileAvatar from "./LinkProfileAvatar";

export default function Header() {
  return (
    <View className="flex-row justify-between w-full px-4 py-4">
      <View>
        <LinkDeliverTo />
      </View>
      <LinkProfileAvatar />
    </View>
  );
}
