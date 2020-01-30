import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const filter = ['All', 'Active', 'Completed'];

const Footer = () => (
  <View style={styles.container}>
    <Text style={styles.filterTitle}>Show:</Text>
	  <View style={styles.filterItem}>
		  {
			  filter.map(el => (
				  <TouchableOpacity key={el}>
					  <Text style={styles.items}>{el}</Text>
				  </TouchableOpacity>
			  ))
		  }
	  </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
  	flex: 1,
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  maxWidth: '80%'
  },
  filterItem: {
  	flex: 4,
	  flexDirection: 'row',
	  justifyContent: 'space-between',
  },
	filterTitle: {
		fontWeight: 'bold',
		fontSize: 18,
		flex: 1,
		marginRight: 15,
	},
	items: {
		fontSize: 18,
		textTransform: 'uppercase',
	}
});

export default Footer;
