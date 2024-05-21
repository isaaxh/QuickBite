import { Text } from "react-native";
import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { TextProps } from "react-native-svg";
import { cn } from "@/utils/cn";

/* text - 1 : 26 x 2*/
/* text - 2 : 23 */
/* text - 3 : 20 */
/* text - 4 : 17 */
/* text - 5 : 15 */
/* text - 6 : 13 */
/* text - 7 : 12 */
/* text - 8 : 11 */

/* font - GiloryBold; */
/* font - GilorySemiBold; */
/* font - GiloryMedium; */

interface UITextProps extends TextProps, VariantProps<typeof txtStyles> {
  children: string;
  textStyles?: string;
}

const textVariants = {
  variant: {
    base: ["font-GiloryMedium text-base text-center"],
    header: ["font-GiloryBold text-2xl mt-4 mb-1.5"],
    header2: ["font-GilorySemiBold text-xl mt-2"],
    header3: ["font-GilorySemiBold text-xs mt-1"],
    body: ["font-GiloryMedium text-base text-gray-500"],
    body2: ["font-GiloryMedium text-xs text-gray-500"],
  },
};

const txtStyles = cva(textVariants.variant.base, {
  variants: textVariants,
  defaultVariants: {
    variant: "base",
  },
});

const UIText = (Props: UITextProps) => {
  const { children, variant, textStyles, ...props } = Props;
  return (
    <Text className={cn(txtStyles({ variant }), textStyles)} {...props}>
      {children}
    </Text>
  );
};

export default UIText;
