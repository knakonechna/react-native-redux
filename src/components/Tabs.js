import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

export function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
		</Tab.Navigator>
	);
}
