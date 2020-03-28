import React from "react";
import { View } from "react-native";

interface ICenter {}

export const Center: React.FC<ICenter> = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {children}
    </View>
  );
};
