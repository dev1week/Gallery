import React from "react";

import { View } from "react-native";

export const Spacer = (props) => {
  if (props.horizontal) {
    return <View style={{ marginLeft: props.space }}></View>;
  } else {
    return <View style={{ marginTop: props.space }}></View>;
  }
};
