import { ActivityIndicator, KeyboardAvoidingView, View } from "react-native";
import React, { useState } from "react";
import UIText from "@/components/ui/UIText";
import UIButton from "@/components/ui/UIButton";
import NavButton from "@/components/NavButton";
import UIInput from "@/components/ui/UIInput";
import { AuthContextProps } from "@/services/providers/AuthProvider";
import { useAuth } from "@/hooks/useAuth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, signup, login } = useAuth() as AuthContextProps;

  return (
    <View className="flex-1 bg-background">
      <KeyboardAvoidingView behavior="padding" className="flex-1">
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
          <View className="mt-3">
            <UIInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email here"
              keyboardType="email-address"
            />
            <UIInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password here"
              secureTextEntry={true}
              isPassword
            />
          </View>
          <View className="flex-1 justify-end mb-4">
            {loading ? (
              <ActivityIndicator />
            ) : (
              <>
                <UIButton
                  onPress={() => login({ email, password })}
                  size="large"
                  buttonStyles="mx-0 mb-3"
                >
                  Login
                </UIButton>
                <UIButton
                  onPress={() => signup({ email, password })}
                  size="large"
                  buttonStyles="mx-0"
                >
                  Create account
                </UIButton>
              </>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
