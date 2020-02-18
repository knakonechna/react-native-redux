import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ContentScreen } from "../screens/ContentScreen";
import { CategoriesScreen } from "../screens/CategoriesScreen";

const AppNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    Content: ContentScreen
  },
  { headerMode: "none" }
);

export default createAppContainer(AppNavigator);
