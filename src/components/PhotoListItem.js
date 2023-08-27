import React, { useCallback } from "react";
import { useWindowDimensions } from "react-native";
import { Button } from "./Button";
import { RemoteImage } from "./RemoteImage";
import { Spacer } from "./Spacer";
export const PhotoListItem = (props) => {
  const { width } = useWindowDimensions();

  const onPressItem = useCallback(() => {}, []);

  return (
    <Button onPress={onPressItem} paddingHorizontal={20} paddingVertical={10}>
      <Spacer horizontal={false} space={30}></Spacer>
      <RemoteImage url={props.url} width={width - 40} height={width * 1.2} />
      <Spacer></Spacer>
    </Button>
  );
};
