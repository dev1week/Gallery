import React, { useCallback } from "react";
import { useWindowDimensions, View } from "react-native";
import { Header } from "../components/Header/Header";
import { Typography } from "../components/Typography";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RemoteImage } from "../components/RemoteImage";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";

export const ImageDetailScreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();

  const { width, height } = useWindowDimensions();

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPressDownload = useCallback(() => {}, []);

  return (
    <View style={{ flex: 1 }}>
      <Header style={{ flex: 0.5 }}>
        <Header.Group>
          <Header.Icon
            iconName={"arrow-back"}
            onPress={onPressBack}
          ></Header.Icon>
          <Header.Title title="IMAGE DETAIL"></Header.Title>
        </Header.Group>
      </Header>
      <View
        style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
      >
        <RemoteImage
          url={route.params.url}
          width={width}
          height={(height * 2) / 3}
        />
      </View>
      <Button onPress={onPressDownload}>
        <View style={{ paddingBottom: 24, backgroundColor: "black" }}>
          <View
            style={{
              height: 52,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color={"white"}>Download</Typography>
            <Icon name="download" color="white" size={24}></Icon>
          </View>
        </View>
      </Button>
    </View>
  );
};
