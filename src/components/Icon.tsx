import React, { ComponentProps } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { EmojiHappy, Profile } from "iconsax-react-native";

type TabBarIconProps = {
  name: string;
  variant?: ComponentProps<typeof Profile>["variant"];
  size?: ComponentProps<typeof Profile>["size"];
  color?: ComponentProps<typeof Profile>["color"];
};

export default function TabBarIcon({
  name,
  variant = "Linear",
  size = 28,
  color = "#eee",
}: TabBarIconProps) {
  let IconComponent = Profile;

  return IconComponent ? (
    <IconComponent size={size} variant={variant} color={color} />
  ) : (
    <EmojiHappy size="24" variant="Linear" color={color} />
  );
}

/* export default function Icon(props: { */
/*   name: React.ComponentProps<typeof FontAwesome>["name"]; */
/*   color: string; */
/* }) { */
/*   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />; */
/* } */
