import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { HomeScreen } from "../screens/HomeScreen";

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    NewPage: HomeScreen
  },
  {
    defaultNavigationOptions: {
      tabBarVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);
