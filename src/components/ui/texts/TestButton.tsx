import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TouchableHighlight,
  Button,
} from "react-native";
import { forwardRef } from "react";

type TestButtonProps = { title: string };

const TestButton = forwardRef(function TestButton(
  { title }: TestButtonProps,
  ref,
) {
  return (
    <Pressable ref={ref}>
      <Text>Go to home now</Text>
    </Pressable>
  );
});

export default TestButton;
