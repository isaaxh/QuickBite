import { TextInput, TextInputProps, View } from "react-native";
import React, { forwardRef, useState } from "react";
import { cn } from "@/utils/cn";
import { Eye, EyeSlash, Icon } from "iconsax-react-native";
import UIButton from "./UIButton";
import { Control, Controller, FieldValues } from "react-hook-form";
import UIText from "./UIText";
import { TLoginSchema } from "@/utils/types";

type UIInputProps = {
  name: "email" | "password";
  control: Control<TLoginSchema>;
  isPassword?: boolean;
  containerStyles?: string;
  buttonStyles?: string;
  textStyles?: string;
} & TextInputProps;

const UIInput = forwardRef<TextInput, UIInputProps>(
  (props: UIInputProps, forwardedRef) => {
    const { name, control, isPassword } = props;
    const [hidePass, setHidePass] = useState(false);
    const [inputStyles, setInputStyles] = useState("border-gray-200");

    const inputStylesOnFocus = () => {
      setInputStyles("border-primary-100 text-primary-100");
    };
    const inputStylesOnBlur = () => {
      setInputStyles("border-gray-200");
    };

    return (
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View className="mb-3">
            <View
              className={cn(
                "border rounded-2xl px-3 py-2 mb-1 flex-row items-center justify-between",
                /* inputStyles, */
                error ? "border-red-400 bg-red-100" : "border-gray-200",
              )}
            >
              <TextInput
                ref={forwardedRef}
                className="flex-1"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                {...props}
              />
            </View>
            {error && (
              <UIText
                variant="body3"
                textStyles={"text-left ml-2 self-stretch text-red-400"}
              >
                {error.message}
              </UIText>
            )}
          </View>
        )}
      />
    );
  },
);

export default UIInput;

/* <TextInput */
/*   ref={forwardedRef} */
/*   onFocus={inputStylesOnFocus} */
/* keyboardType="email-address" */
/*   onBlur={inputStylesOnBlur} */
/* /> */

/* {isPassword && ( */
/*   <UIButton variant="bare" onPress={() => setHidePass(!hidePass)}> */
/*     {hidePass ? ( */
/*       <EyeSlash className={cn("text-gray-300", inputStyles)} /> */
/*     ) : ( */
/*       <Eye className={cn("text-gray-300", inputStyles)} /> */
/*     )} */
/*   </UIButton> */
/* )} */
