import React, { useCallback } from "react";
import { useWindowDimensions } from "react-native";
import { Button } from "./Button";
import { RemoteImage } from "./RemoteImage";
import { Spacer } from "./Spacer";
import { useNavigation } from "@react-navigation/native";
export const PhotoListItem = (props) => {
  const { width } = useWindowDimensions();
  //이미지 클릭시 상세 화면 전환되도록 네비게이션 추가
  const navigation = useNavigation();

  //root stack navigation에 정의한 이미지 상세 페이지 확인하고 오기
  const onPressItem = useCallback(() => {
    navigation.navigate("ImageDetail", { url: props.url });
  }, []);

  return (
    <Button onPress={onPressItem} paddingHorizontal={20} paddingVertical={10}>
      <Spacer horizontal={false} space={30}></Spacer>
      <RemoteImage url={props.url} width={width - 40} height={width * 1.2} />
      <Spacer></Spacer>
    </Button>
  );
};
