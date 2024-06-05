import { TextInput, TextInputProps, View } from "react-native";
import React, { forwardRef, useState } from "react";
import { cn } from "@/utils/cn";
import { Eye, EyeSlash, Icon } from "iconsax-react-native";
import UIButton from "./UIButton";

type UIInputProps = {
  isPassword?: boolean;
  containerStyles?: string;
  buttonStyles?: string;
  textStyles?: string;
} & TextInputProps;

/* & */
/*   OptionalButtonProps & */
/*   VariantProps<typeof btnStyles>; */

const UIInput = forwardRef<TextInput, UIInputProps>(
  (props: UIInputProps, forwardedRef) => {
    const { isPassword } = props;
    const [hidePass, setHidePass] = useState(false);
    const [inputStyles, setInputStyles] = useState("border-gray-200");

    const inputStylesOnFocus = () => {
      setInputStyles("border-primary-100 text-primary-100");
    };
    const inputStylesOnBlur = () => {
      setInputStyles("border-gray-200");
    };

    return (
      <View
        className={cn(
          "border rounded-2xl px-3 py-2 mb-3 flex-row items-center justify-between",
          inputStyles,
        )}
      >
        <TextInput
          ref={forwardedRef}
          className="flex-1"
          autoCapitalize="none"
          onBlur={inputStylesOnBlur}
          onFocus={inputStylesOnFocus}
          {...props}
        />
        {/* {isPassword && ( */}
        {/*   <UIButton variant="bare" onPress={() => setHidePass(!hidePass)}> */}
        {/*     {hidePass ? ( */}
        {/*       <EyeSlash className={cn("text-gray-300", inputStyles)} /> */}
        {/*     ) : ( */}
        {/*       <Eye className={cn("text-gray-300", inputStyles)} /> */}
        {/*     )} */}
        {/*   </UIButton> */}
        {/* )} */}
      </View>
    );
  },
);

export default UIInput;
