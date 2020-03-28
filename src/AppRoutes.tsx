import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp
} from "@react-navigation/stack";
import React, { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { AppTabs } from "./AppTabs";
import { Center } from "./components/Center";
import { AuthContext } from "./providers/AuthProvider";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";

type StackNavigationParams = {
  Login: undefined;
  Register: undefined;
};

export type StackNavigationProps<T extends keyof StackNavigationParams> = {
  navigation: StackNavigationProp<StackNavigationParams, T>;
};

const Stack = createStackNavigator<StackNavigationParams>();

const PrivateRoutes = () => {
  return <AppTabs />;
};

const PublicRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ header: () => null }}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export const AppRoutes: React.FC<{}> = ({}) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};
