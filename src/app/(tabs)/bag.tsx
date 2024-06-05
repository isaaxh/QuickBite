import { StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import UIButton from "@/components/ui/UIButton";
import RequireAuth from "@/app/RequireAuth";
import { useAuth } from "@/hooks/useAuth";
import { AuthContextProps } from "@/services/providers/AuthProvider";

export default function BagScreen() {
  const { user, logout } = useAuth() as AuthContextProps;

  return (
    <View style={styles.container}>
      {user ? (
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

          <UIButton onPress={logout} variant="fill" size="large">
            Logout
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
