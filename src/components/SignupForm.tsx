import { View, KeyboardAvoidingView } from "react-native";
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

const SignupForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const { login, loading } = useAuth() as AuthContextProps;

  const onSubmit = (data: TLoginSchema) => {
    login({ email: data.email, password: data.password });
    console.log({ email: data.email, password: data.password });
  };

  return (
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

        <View className="flex-1 justify-end items-center mb-4">
          <UIButton
            onPress={handleSubmit(onSubmit)}
            size="large"
            buttonStyles="mx-0 mb-3"
            loading={loading}
          >
            Login
          </UIButton>
          <Link href="/(resturants)/AllResturantScreen" asChild>
            <UIButton
              hitSlop={5}
              variant="bare"
              size="small"
              buttonStyles="p-0"
              textStyles="text-gray-500"
            >
              Forgot password?
            </UIButton>
          </Link>
          {/* <UIButton */}
          {/*   onPress={() => signup({ email, password })} */}
          {/*   size="large" */}
          {/*   buttonStyles="mx-0" */}
          {/*   loading={loading} */}
          {/* > */}
          {/*   Create account */}
          {/* </UIButton> */}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupForm;
