import React, { useCallback } from "react";
import { ActivityIndicator, useWindowDimensions, View } from "react-native";
import { Header } from "../components/Header/Header";
import { Typography } from "../components/Typography";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RemoteImage } from "../components/RemoteImage";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
export const ImageDetailScreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();

  const { width, height } = useWindowDimensions();

  const [downloading, setDownloading] = React.useState(false);

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPressDownload = useCallback(async () => {
    setDownloading(true);
    const downloadResumable = FileSystem.createDownloadResumable(
      route.params.url,
      `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`,
      {},
    );

    try {
      const { uri } = await downloadResumable.downloadAsync();
      console.log(uri);
      const permissionResult = await MediaLibrary.getPermissionsAsync(true);
      console.log(permissionResult);
      //권한 허용 거절된 경우
      if (permissionResult.status == "denied") {
        setDownloading(false);
        return;
      }

      //허락 안하는 경우
      if (permissionResult.status == "undetermined") {
        //다시 묻는다.
        const requestResult = await MediaLibrary.requestPermissionsAsync();
        if (requestResult.status == "denied") {
          setDownloading(false);
          return;
        }
      }

      const asset = await MediaLibrary.createAlbumAsync(uri);
      const album = await MediaLibrary.createAlbumAsync(
        "MyFirstAlbum",
        asset,
        false,
      );
      console.log(asset);
      console.log(album);
    } catch (ex) {
      console.log(ex);
    }
    setDownloading(false);
  }, []);

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
          {downloading ? (
            <View style={{ paddingBottom: 24, backgroundColor: "black" }}>
              <ActivityIndicator />
            </View>
          ) : (
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
          )}
        </View>
      </Button>
    </View>
  );
};
