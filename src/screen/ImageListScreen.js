import React from "react";
import { View } from "react-native";
import { Typography } from "../components/Typography";
import { Header } from "../components/Header/Header";

export const ImageListScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="Image List"></Header.Title>
        </Header.Group>
      </Header>

      <View
        style={{ flext: 1, alignItems: "center", justifyContent: "center" }}
      ></View>
    </View>
  );
};
