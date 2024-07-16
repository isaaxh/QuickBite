import { View } from "react-native";
import React from "react";
import NavButton from "./NavButton";
import UIText from "./ui/UIText";
import UIInput from "./ui/UIInput";
import UIButton from "./ui/UIButton";
import { useForm } from "react-hook-form";
import { TLoginSchema, loginSchema } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { AuthContextProps } from "@/services/providers/AuthProvider";
import { Link } from "expo-router";
import IconCard from "./IconCard";

const LoginForm = () => {
  const { control, handleSubmit } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const { login, loading } = useAuth() as AuthContextProps;

  const onSubmit = (data: TLoginSchema) => {
    login({ email: data.email, password: data.password });
  };

  return (
    <>
      <View className="top-8 left-2">
        <NavButton variant="cancel" />
      </View>
      <View className="mx-4 mt-6">
        <UIText textStyles="text-left" variant="header">
          Enter your email
        </UIText>
        <UIText textStyles="text-left mb-3" variant="body">
          Enter your email to log in to your account
        </UIText>
        <View className="mt-3">
          <UIInput
            name="email"
            control={control}
            placeholder="Enter email here"
          />
          <UIInput
            name="password"
            control={control}
            placeholder="Enter password here"
            secureTextEntry={true}
            isPassword
          />
        </View>

        <View className="flex-row justify-between items-center px-1">
          <UIText variant="body3">Remember me</UIText>
          <Link href="/" asChild>
            <UIButton
              hitSlop={5}
              variant="bare"
              size="small"
              buttonStyles="p-0"
              textStyles="text-blue-500"
            >
              Forgot password?
            </UIButton>
          </Link>
        </View>
      </View>
      <View className="justify-end items-center mb-6 mx-4 mt-auto">
        <UIButton
          onPress={handleSubmit(onSubmit)}
          size="large"
          buttonStyles="mx-0 mb-3"
          loading={loading}
        >
          Login
        </UIButton>
        <View className="flex-row items-center">
          <UIText variant="body3">Don't have an account? </UIText>
          <Link href="/" asChild>
            <UIButton
              hitSlop={5}
              variant="bare"
              size="small"
              buttonStyles="p-0 m-0"
              textStyles="text-blue-500"
            >
              Sign Up
            </UIButton>
          </Link>
        </View>
      </View>
      <View className="flex-row justify-center items-center gap-3 px-6 mb-6">
        <View className="border-b flex-1 border-b-gray-400" />
        <UIText variant="body3">Or login with</UIText>
        <View className="border-b flex-1 border-b-gray-400" />
      </View>
      <View className="flex-row justify-center items-center mx-4 mb-8">
        <IconCard iconName="google" />
        <IconCard iconName="apple" />
        <IconCard iconName="facebook" />
      </View>
    </>
  );
};

export default LoginForm;
