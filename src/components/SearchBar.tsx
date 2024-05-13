import { View, TextInput, TouchableOpacity, Keyboard } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { COLORS } from "@/constants/Colors";
import Icon from "./Icon";

type SearchBarProps = {
  searchActive: boolean;
  toggleSearchActive: Dispatch<SetStateAction<boolean>>;
  searchPhrase: string;
  setSearchPhrase: Dispatch<SetStateAction<string>>;
};

export default function SearchBar({
  searchActive,
  toggleSearchActive,
  searchPhrase,
  setSearchPhrase,
}: SearchBarProps) {
  return (
    <View className="w-full">
      <View
        style={{ backgroundColor: COLORS.grey }}
        className="m-3 py-3 px-5 h-14 rounded-2xl items-center flex-row"
      >
        <View className="mr-4">
          <Icon name="search" color={COLORS["black-500"]} size={20} />
        </View>
        <TextInput
          className="flex-1"
          style={{ fontFamily: "Gilory-Medium", color: COLORS["black-500"] }}
          placeholder={"Search for a store or product"}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => toggleSearchActive(true)}
        />

        {searchActive && (
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              setSearchPhrase("");
              toggleSearchActive(false);
            }}
          >
            <Icon name="times" color={COLORS["black-500"]} size={20} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
