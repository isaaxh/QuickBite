import { Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { ArrowLeft } from "iconsax-react-native";

const BackButton = () => {
  const [isPressed, setPressed] = useState(false);
  const navigation = useNavigation();
  return (
    <Pressable
      className="rounded-2xl p-3"
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={{ backgroundColor: "#ffffff88", opacity: isPressed ? 0.6 : 1 }}
      onPress={() => navigation.goBack()}
    >
      <ArrowLeft size="32" color="#000000" />
    </Pressable>
  );
};

export default BackButton;
