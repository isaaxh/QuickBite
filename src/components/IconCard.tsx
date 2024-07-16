import React from "react";
import UIButton from "./ui/UIButton";
import { TIconProps } from "./Icon";

type IconCardProps = {
  iconName: TIconProps["name"];
  iconSize?: TIconProps["size"];
  iconColor?: TIconProps["color"];
};

const IconCard = (props: IconCardProps) => {
  const { iconName, iconSize = 24, iconColor = "#18181b" } = props;
  return (
    <>
      <UIButton
        variant="icon"
        iconName={iconName}
        iconSize={iconSize}
        iconColor={iconColor}
        containerStyles="flex-1 justify-center"
        buttonStyles="bg-gray-200 flex-1 items-center mx-2"
      />
    </>
  );
};

export default IconCard;
