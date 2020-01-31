import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { filterTodoBy } from "../actions/filterTodo";

const filter = ["All", "Active", "Completed"];

const Footer = () => {
  const [activeEl, setActiveEl] = useState('All');
	const dispatch = useDispatch();

	const filterTodos = (el) => {
    setActiveEl(el);
	  const condition = el.toLowerCase();

    dispatch(filterTodoBy(condition))
  };


  return (
    <View style={styles.container}>
      <Text style={styles.filterTitle}>Show:</Text>
      <View style={styles.filterItem}>
        {filter.map(el => (
          <TouchableOpacity key={el} onPress={() => filterTodos(el)}>
            <Text style={[styles.items, activeEl === el && styles.activeElement]}>{el}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: "80%"
  },
  filterItem: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  filterTitle: {
    fontWeight: "bold",
    fontSize: 18,
    flex: 1,
    marginRight: 15
  },
  items: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  activeElement: {
    shadowColor: "red",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 9,
  }
});

export default Footer;
