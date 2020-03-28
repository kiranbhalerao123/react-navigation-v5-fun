import React from "react";
import { Text } from "react-native";
import { Center } from "../components/Center";

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = ({}) => {
  return (
    <Center>
      <Text>I am Register Component ..</Text>
    </Center>
  );
};
