import React, { Children } from "react";
import { Text as RNText } from "react-native";
import PropTypes from "prop-types";

export const Typography = (props) => {
  return (
    <RNText
      style={{
        color: props.color,
        fontSize: props.fontSize,
      }}
    >
      {props.children}
    </RNText>
  );
};
