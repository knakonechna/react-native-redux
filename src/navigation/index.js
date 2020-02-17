import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ContentScreen } from "../screens/ContentScreen";

const AppNavigator = createStackNavigator(
  {
    Content: ContentScreen
  },   { headerMode: 'none' }
);

export default createAppContainer(AppNavigator);
