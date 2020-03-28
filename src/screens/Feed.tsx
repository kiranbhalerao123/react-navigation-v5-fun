import faker from "faker";
import React from "react";
import { Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Center } from "../components/Center";
import { HomeStackNavigationProps } from "../stacks/HomeStack";

type FeedProps = HomeStackNavigationProps<"Feed">;

export const Feed: React.FC<FeedProps> = ({ navigation }) => {
  return (
    <Center>
      <FlatList
        data={Array.from(Array(50), () => faker.commerce.product())}
        keyExtractor={(pro, i) => `${pro}${i}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                padding: 16,
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => navigation.navigate("Product", { name: item })}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        }}
        style={{ width: "100%" }}
      />
    </Center>
  );
};
