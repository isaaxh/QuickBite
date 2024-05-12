import React from "react";
import { GlobalStyles } from "@/utils/GlobalStyles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import Colors from "@/constants/Colors";
import { COLORS } from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import TabBarIcon from "@/components/TabBarIcon";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        /* headerShown: useClientOnlyValue(false, true), */
        headerShown: false,
        tabBarStyle: {
          height: 65,
          position: "absolute",
          bottom: 25,
          right: 20,
          left: 20,
          backgroundColor: "#ffff",
          /* backgroundColor: COLORS["primary-100"], */
          borderRadius: 25,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          ...GlobalStyles.shadow,
        },
        tabBarLabelStyle: {
          marginBottom: 3,
        },
        tabBarItemStyle: {
          padding: 5,
        },
        /* tabBarShowLabel: false, */
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          title: "Bag",
          tabBarIcon: ({ color }) => <TabBarIcon name="bag2" color={color} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color }) => <TabBarIcon name="note" color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="profile" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
