import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ContentScreen } from '../screens/ContentScreen';

const Tab = createMaterialBottomTabNavigator();

export function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={ContentScreen} />
		</Tab.Navigator>
	);
}
