import React from "react";
import { Button, Text } from "react-native";
import { Center } from "../components/Center";
import { HomeStackNavigationProps } from "../stacks/HomeStack";

type ProductProps = HomeStackNavigationProps<"Product">;

export const Product: React.FC<ProductProps> = ({ route, navigation }) => {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit"
        onPress={() => navigation.navigate("Edit", { name: route.params.name })}
      />
    </Center>
  );
};
