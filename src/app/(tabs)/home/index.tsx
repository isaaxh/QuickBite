import { Text, StyleSheet, Pressable } from "react-native";
import { View } from "@/components/Themed";
import Header from "@/components/Header";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { COLORS } from "@/constants/Colors";
import { Link } from "expo-router";
import SearchBar from "@/components/SearchBar";
import useToggle from "@/hooks/useToggle";
import { useState } from "react";
import MyResturantCardList from "@/components/MyResturantCardList";

export default function HomeScreen() {
  const { status: searchActive, setStatus: toggleSearchActive } =
    useToggle(true);
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <SafeAreaView className="bg-background flex-1 items-center">
      <Header />
      <SearchBar
        searchActive={searchActive}
        toggleSearchActive={toggleSearchActive}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <View className="w-full mb-4 mt-2 px-4 flex-row items-center justify-between">
        <Text style={{ fontFamily: "Gilory-Bold", fontSize: 17 }}>
          Popular Resturants
        </Text>
        <Link href="/(resturants)/AllResturantScreen" asChild>
          <Pressable hitSlop={5}>
            <Text
              style={{
                fontFamily: "Gilory-SemiBold",
                fontSize: 13,
                color: COLORS["black-500"],
              }}
            >
              View all
            </Text>
          </Pressable>
        </Link>
      </View>
      <MyResturantCardList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
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
