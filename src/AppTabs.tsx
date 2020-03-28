import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HomeStack } from "./stacks/HomeStack";
import { SearchStack } from "./stacks/SearchStack";

interface AppTabsProps {}
type TabNavigationParams = {
  Home: undefined;
  Search: undefined;
};

const BottomTab = createBottomTabNavigator<TabNavigationParams>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            return <AntDesign name={"home"} size={size} color={color} />;
          } else if (route.name === "Search") {
            iconName = "ios-search";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <BottomTab.Screen name="Home" component={HomeStack} />
      <BottomTab.Screen name="Search" component={SearchStack} />
    </BottomTab.Navigator>
  );
};
