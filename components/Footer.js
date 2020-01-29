import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const filter = ['All', 'Active', 'Completed'];

const Footer = () => (
  <View style={styles.container}>
    <Text>Show:</Text>
	  {
		  filter.map(el => (
			  <TouchableOpacity key={el} style={styles.filterItem}>
				  <Text>{el}</Text>
			  </TouchableOpacity>
		  ))
	  }
  </View>
);

const styles = StyleSheet.create({
  container: {
  	flex: 1,
	  flexDirection: 'row',
  },
  filterItem: {}
});

export default Footer;
