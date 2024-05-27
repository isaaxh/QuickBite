import { Pressable, PressableProps, Text, View } from "react-native";
import React, { ReactNode, forwardRef, useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

interface UIButtonProps extends PressableProps, VariantProps<typeof btnStyles> {
  children: ReactNode;
  containerStyles?: string;
  buttonStyles?: string;
  textStyles?: string;
}

const buttonVariants = {
  text: {
    baseText: "text-center font-GiloryRegular",
    smallText: "text-xs font-GilorySemiBold",
    defaultText: "text-base text-gray-600 font-GiloryMedium",
    largeText: "text-base font-GilorySemiBold",
  },
  variant: {
    bare: [""],
    outline: ["border border-gray-400"],
    fill: ["bg-primary-100"],
  },
  size: {
    small: ["px-3 py-1"],
    default: ["py-2 px-4"],
    large: ["py-4 items-center flex-1 mx-4"],
  },
};

const btnStyles = cva(["rounded-3xl"], {
  variants: buttonVariants,
  defaultVariants: {
    variant: "fill",
    size: "default",
  },
});

const UIButton = forwardRef<View, UIButtonProps>(
  (Props: UIButtonProps, forwardedRef) => {
    const {
      children,
      variant,
      size,
      containerStyles,
      buttonStyles,
      textStyles,
      ...props
    } = Props;

    const [isPressed, setPressed] = useState(false);

    const textKey = `${size}Text` as keyof typeof buttonVariants.text;
    const textStyle = buttonVariants.text[textKey];

    /* const onBtnPress = () => setPressed(true); */

    return (
      <View className={cn("flex-row", containerStyles)}>
        <Pressable
          ref={forwardedRef}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          className={cn(
            btnStyles({ variant: variant, size: size }),
            buttonStyles,
            isPressed ? "opacity-60" : "",
          )}
          {...props}
          /* onPress={onBtnPress} */
        >
          <Text
            className={cn(buttonVariants.text.baseText, textStyle, textStyles)}
          >
            {children}
          </Text>
        </Pressable>
      </View>
    );
  },
);

export default UIButton;
