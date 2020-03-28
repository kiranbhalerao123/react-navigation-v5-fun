import React, { useContext } from "react";
import { Button, Text } from "react-native";
import { StackNavigationProps } from "../AppRoutes";
import { Center } from "../components/Center";
import { AuthContext } from "../providers/AuthProvider";

export const Login: React.FC<StackNavigationProps<"Login">> = ({
  navigation
}) => {
  const { user, login } = useContext(AuthContext);

  return (
    <Center>
      <Text>I am Login Component ..</Text>
      {!user && <Button title="Log me in" onPress={() => login()} />}
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate("Register")}
      />
    </Center>
  );
};
