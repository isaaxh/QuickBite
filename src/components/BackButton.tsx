import { Pressable } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { ArrowLeft } from "iconsax-react-native";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      className="rounded-2xl p-3"
      style={{ backgroundColor: "#ffffff88" }}
      onPress={() => navigation.goBack()}
    >
      <ArrowLeft size="32" color="#000000" />
    </Pressable>
  );
};

export default BackButton;
