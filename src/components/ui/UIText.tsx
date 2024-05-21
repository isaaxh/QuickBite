import { Text } from "react-native";
import React, { ReactNode, forwardRef } from "react";
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
  children: ReactNode;
  textStyles?: string;
}

const textVariants = {
  variant: {
    base: ["font-GiloryMedium text-base text-center"],
    header: ["font-GiloryBold text-2xl mt-4 mb-1.5"],
    header2: ["font-GilorySemiBold text-xl"],
    header3: ["font-GiloryBold text-base text-black"],
    header4: ["font-GilorySemiBold text-xs"],
    body: ["font-GiloryMedium text-base text-gray-500"],
    body2: ["font-GiloryMedium text-xs text-gray-500"],
    body3: ["font-GilorySemiBold text-xs text-gray-500"],
  },
};

const txtStyles = cva(textVariants.variant.base, {
  variants: textVariants,
  defaultVariants: {
    variant: "base",
  },
});

const UIText = forwardRef<Text, UITextProps>((Props: UITextProps, ref) => {
  const { children, variant, textStyles, ...props } = Props;
  return (
    <Text
      ref={ref}
      className={cn(txtStyles({ variant }), textStyles)}
      {...props}
    >
      {children}
    </Text>
  );
});

export default UIText;
