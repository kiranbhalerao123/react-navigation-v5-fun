import { RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp
} from "@react-navigation/stack";
import React, { useContext } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../providers/AuthProvider";
import { Edit } from "../screens/Edit";
import { Feed } from "../screens/Feed";
import { Product } from "../screens/Product";

interface HomeStackProps {}

type HomeNavigationParams = {
  Feed: undefined;
  Product: {
    name: string;
  };
  Edit: {
    name: string;
    submit?: React.MutableRefObject<() => void>;
  };
};

export type HomeStackNavigationProps<T extends keyof HomeNavigationParams> = {
  navigation: StackNavigationProp<HomeNavigationParams, T>;
  route: RouteProp<HomeNavigationParams, T>;
};

const Stack = createStackNavigator<HomeNavigationParams>();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const { logout } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity onPress={logout} style={{ padding: 12 }}>
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          }
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({ headerTitle: route.params.name })}
      />
      <Stack.Screen
        name="Edit"
        component={Edit}
        options={({ route }) => ({
          headerTitle: `Edit: ${route.params.name}`,
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ paddingRight: 12 }}
                onPress={() => {
                  route.params.submit?.current();
                }}
              >
                <Text>DONE</Text>
              </TouchableOpacity>
            );
          }
        })}
      />
    </Stack.Navigator>
  );
};
