import { Home } from "iconsax-react-native";
import { Bag2 } from "iconsax-react-native";
import { Note } from "iconsax-react-native";
import { Profile } from "iconsax-react-native";
import { EmojiHappy } from "iconsax-react-native";
import { ComponentProps } from "react";

type TabBarIconProps = {
  name: string;
  variant?: ComponentProps<typeof Home>["variant"];
  size?: ComponentProps<typeof Home>["size"];
  color?: ComponentProps<typeof Home>["color"];
};

export default function TabBarIcon({
  name,
  variant = "Linear",
  size = 28,
  color = "#eee",
}: TabBarIconProps) {
  let IconComponent = null;
  switch (name) {
    case "home":
      IconComponent = Home;
      break;
    case "bag2":
      IconComponent = Bag2;
      break;
    case "note":
      IconComponent = Note;
      break;
    case "profile":
      IconComponent = Profile;
      break;
  }

  return IconComponent ? (
    <IconComponent size={size} variant={variant} color={color} />
  ) : (
    <EmojiHappy size="24" variant="Linear" color={color} />
  );
}
