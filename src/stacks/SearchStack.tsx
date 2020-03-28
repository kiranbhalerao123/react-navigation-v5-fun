import { RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp
} from "@react-navigation/stack";
import React from "react";
import { Search } from "../screens/Search";

interface SearchStackProps {}

type SearchNavigationParams = {
  Search: undefined;
  Product: {
    name: string;
  };
  Edit: {
    name: string;
    submit?: React.MutableRefObject<() => void>;
  };
};

export type SearchStackNavigationProps<
  T extends keyof SearchNavigationParams
> = {
  navigation: StackNavigationProp<SearchNavigationParams, T>;
  route: RouteProp<SearchNavigationParams, T>;
};

const Stack = createStackNavigator<SearchNavigationParams>();

export const SearchStack: React.FC<SearchStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
