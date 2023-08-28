import React, { useCallback, useState } from "react";
import { Animated, useWindowDimensions } from "react-native";
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

  //클릭시 확대 축소 애니메이션 구현 부
  const [animationValue] = useState(new Animated.Value(0));

  const onPressIn = useCallback(() => {
    console.log("onPressIN");
    Animated.timing(animValue, {
      duration: 200,
      toValue: 1,
    }).start();
  }, []);

  const onPressOut = useCallback(() => {
    console.log("onPressOut");
    Animated.timing(animValue, {
      duration: 200,
      toValue: 0,
    }).start();
  }, []);

  const scale = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1.0, 0.95],
  });

  return (
    <Button
      onPress={onPressItem}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      paddingHorizontal={20}
      paddingVertical={10}
    >
      <Spacer horizontal={false} space={30}></Spacer>
      <Animated.View style={{ transform: [{ scale: scale }] }}>
        <RemoteImage url={props.url} width={width - 40} height={width * 1.2} />
      </Animated.View>

      <Spacer></Spacer>
    </Button>
  );
};
