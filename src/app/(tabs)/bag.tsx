import { StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import UIButton from "@/components/ui/UIButton";
import RequireAuth from "@/app/RequireAuth";

export default function BagScreen() {
  const userLoggedIn = false;
  return (
    <View style={styles.container}>
      {userLoggedIn ? (
        <>
          <Text className="font-GiloryExtraBold" style={styles.title}>
            Bag
          </Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <EditScreenInfo path="app/(tabs)/two.tsx" />

          <UIButton variant="bare" size="small">
            Text
          </UIButton>
          <UIButton variant="outline" size="default">
            Outline
          </UIButton>

          <UIButton variant="fill" size="large">
            Get Started
          </UIButton>
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
