import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { ContentScreen } from "../screens/ContentScreen";

const AppNavigator = createBottomTabNavigator(
  {
    Content: ContentScreen,
  },
  {
    defaultNavigationOptions: {
      tabBarVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);
