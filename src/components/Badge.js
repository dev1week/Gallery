import React from "react";
import { View } from "react-native";
import { Typography } from "./Typography";

export const Badge = (props) => {
  return (
    <View>
      {props.children}
      <View
        style={[
          {
            width: 16,
            hegith: 16,
            borderRadius: 8,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          },
          {
            position: "absolute",
            right: -5,
            top: -5,
          },
        ]}
      ></View>
    </View>
  );
};
