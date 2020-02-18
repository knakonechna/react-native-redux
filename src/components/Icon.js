import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomIcon = props => (
  <TouchableOpacity style={{ flexDirection: "row" }} onPress={props.trigger}>
    <Text>
      <Icon
        name={props.iconName}
        size={props.iconSize || 25}
        color={props.iconColor || "#000"}
      />
    </Text>
    {props.text && <Text style={props.textStyle}>{props.text}</Text>}
  </TouchableOpacity>
);

export default CustomIcon;
