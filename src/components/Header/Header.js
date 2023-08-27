import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, useWindowDimensions } from "react-native";
import { HeaderTitle } from "./HeaderTitle";
import { HeaderIcon } from "./HeaderButton";
import { HeaderGroup } from "./HeaderGroup";
import { Spacer } from "../Spacer";

export const Header = (props) => {
  //아이폰 노치 영역 회피를 위해 safeArea 선언
  const insets = useSafeAreaInsets();
  const width = useWindowDimensions();

  return (
    <View style={{ paddingTop: insets.top }}>
      <View
        style={{
          width: width,
          flexDirection: "row",
          height: 56,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
          alignsItems: "center",
        }}
      >
        <Spacer horizontal={true} space={12} />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {props.children}
        </View>

        <Spacer></Spacer>
      </View>
    </View>
  );
};

Header.Title = HeaderTitle;
Header.Icon = HeaderIcon;
Header.Group = HeaderGroup;
