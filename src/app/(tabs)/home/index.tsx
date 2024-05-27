import { View } from "@/components/Themed";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import SearchBar from "@/components/SearchBar";
import useToggle from "@/hooks/useToggle";
import { useState } from "react";
import MyResturantCardList from "@/components/MyResturantCardList";
import UIText from "@/components/ui/UIText";
import UIButton from "@/components/ui/UIButton";

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
        <UIText variant="header3">Popular Resturants</UIText>
        <Link href="/(resturants)/AllResturantScreen" asChild>
          <UIButton
            hitSlop={5}
            variant="bare"
            size="small"
            textStyles="font-GilorySemiBold text-gray-500"
          >
            View all
          </UIButton>
        </Link>
      </View>
      <MyResturantCardList popular={true} />
    </SafeAreaView>
  );
}
