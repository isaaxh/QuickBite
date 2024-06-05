import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import RequireAuth from "../RequireAuth";
import { useAuth } from "@/hooks/useAuth";
import { AuthContextProps } from "@/services/providers/AuthProvider";

export default function ProfileScreen() {
  const { user } = useAuth() as AuthContextProps;
  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>Profile</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <EditScreenInfo path="app/(tabs)/two.tsx" />
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
