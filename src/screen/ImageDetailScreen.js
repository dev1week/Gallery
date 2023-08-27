import React, { useCallback } from "react";
import { View } from "react-native";
import { Header } from "../components/Header/Header";
import { Typography } from "../components/Typography";

export const ImageDetailScreen = (props) => {
  return (
    <View style={{ flext: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName={"arrow-back"}></Header.Icon>
          <Header.Title title="IMAGE DETAIL"></Header.Title>
        </Header.Group>
      </Header>
      <View
        style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
      >
        <Typography>Image Detail</Typography>
      </View>
    </View>
  );
};
