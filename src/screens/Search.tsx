import React from "react";
import { Text } from "react-native";
import { Center } from "../components/Center";

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <Center>
      <Text>Search Component</Text>
    </Center>
  );
};
