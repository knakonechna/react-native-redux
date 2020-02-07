import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { filterTodoBy } from "../actions/filterTodo";
import { filterKey } from "../constants";

const Footer = ({ data }) => {
  const [activeEl, setActiveEl] = useState(filterKey[0].key);

  const dispatch = useDispatch();

  const filterTodos = el => {
    setActiveEl(el);
    dispatch(filterTodoBy(el));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.filterTitle}>Show:</Text>
      <View style={styles.filterItem}>
        {filterKey.map(el => (
          <TouchableOpacity key={el.key} onPress={() => filterTodos(el.key)}>
            <View
              style={[
                styles.filterTextWrap,
                activeEl === el.key && styles.activeElement
              ]}
            >
              <Text style={styles.items}>{el.name}</Text>
              <Text style={styles.counter}>({data[el.key].count})</Text>
            </View>
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
    flexDirection: "row",
    justifyContent: "space-between"
  },
  filterTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 10
  },
  items: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
    alignSelf: "stretch"
  },
  activeElement: {
    shadowColor: "#e6c727",
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 9
  },
  filterTextWrap: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  counter: {
    fontSize: 12,
    marginRight: 10,
    marginLeft: 0,
    fontWeight: "bold"
  }
});

export default Footer;
