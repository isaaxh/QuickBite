import { View, Text } from "react-native";
import React from "react";

const SignupScreen = () => {
  return (
    <View>
      <Text>SignUp</Text>
    </View>
  );
};

export default SignupScreen;

/* import { View, Text, TextInput } from "react-native"; */
/* import React, { useState } from "react"; */
/* import UIText from "@/components/ui/UIText"; */
/**/
/* export const LoginScreen = () => { */
/*   const [email, setEmail] = useState(""); */
/*   const [password, setPassword] = useState(""); */
/**/
/*   return ( */
/*     <View className="flex-1 bg-background"> */
/*       <View className="mx-4"> */
/*         <UIText textStyles="text-left" variant="header"> */
/*           Enter your email */
/*         </UIText> */
/*         <UIText textStyles="text-left mb-3" variant="body"> */
/*           Enter your email to log in to your account */
/*         </UIText> */
/*         <View className="gap-4"> */
/*           <TextInput */
/*             className="border rounded-2xl border-primary-100 px-3 py-2" */
/*             placeholder="Email" */
/*           /> */
/*           <TextInput */
/*             className="border rounded-2xl border-primary-100 px-3 py-2" */
/*             placeholder="Password" */
/*           /> */
/*         </View> */
/*         <View className="bg-red-200"> */
/*           <Text>HEllo world</Text> */
/*         </View> */
/*       </View> */
/*     </View> */
/*   ); */
/* }; */
