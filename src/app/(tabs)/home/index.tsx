import { FlatList, Image, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
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
import RESTURANTS from "@/assets/data/resturants";
import ResturantCard from "@/components/ResturantCard";

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
      <FlatList
        data={RESTURANTS}
        renderItem={({ item }) => <ResturantCard resturant={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <View className="bg-red-100 p-3 m-12 rounded-2xl w-full items-center">
        <Link href="/SplashScreen">
          <Text>Splash Screen</Text>
        </Link>
      </View>
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
