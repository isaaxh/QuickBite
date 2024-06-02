import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import UIText from "@/components/ui/UIText";
import RequireAuth from "../RequireAuth";

export default function OrdersScreen() {
  const userLoggedIn = false;
  return (
    <View style={styles.container}>
      {userLoggedIn ? (
        <>
          <Text style={styles.title}>Orders</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <EditScreenInfo path="app/(tabs)/two.tsx" />

          <UIText>base</UIText>
          <UIText variant="header">header 1</UIText>
          <UIText variant="header2">header 2</UIText>
          <UIText variant="header3">header 3</UIText>
          <UIText variant="body">body</UIText>
          <UIText variant="body2">body</UIText>
        </>
      ) : (
        <RequireAuth />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
