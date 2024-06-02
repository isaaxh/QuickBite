import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import UIText from "@/components/ui/UIText";
import UIButton from "@/components/ui/UIButton";
import NavButton from "@/components/NavButton";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <View className="flex-1 bg-background">
      <View className="top-8 left-2">
        <NavButton variant="cancel" />
      </View>
      <View className="mx-4 mt-6 flex-1">
        <UIText textStyles="text-left" variant="header">
          Enter your email
        </UIText>
        <UIText textStyles="text-left mb-3" variant="body">
          Enter your email to log in to your account or sign up today
        </UIText>
        <View className="gap-4">
          <TextInput
            className="border rounded-2xl border-primary-100 px-3 py-2"
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            className="border rounded-2xl border-primary-100 px-3 py-2"
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <View className="flex-1 justify-end mb-4">
          <UIButton size="large" buttonStyles="mx-0" onPress={handleSubmit}>
            Continue
          </UIButton>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
