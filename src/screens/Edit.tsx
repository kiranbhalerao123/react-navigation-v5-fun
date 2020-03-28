import React, { useEffect, useRef } from "react";
import { Text } from "react-native";
import { Center } from "../components/Center";
import { HomeStackNavigationProps } from "../stacks/HomeStack";

type EditProps = HomeStackNavigationProps<"Edit">;

const editApiCall = () => {};

export const Edit: React.FC<EditProps> = ({ route, navigation }) => {
  const submit = useRef(() => {});

  submit.current = () => {
    editApiCall();
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setParams({ submit });
  }, []);

  return (
    <Center>
      <Text>Editing: {route.params.name}</Text>
    </Center>
  );
};
