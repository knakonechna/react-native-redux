import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ToDo from "./ToDo";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../actions/getTodosList";

const ToDoList = () => {
  const { data, filterBy } = useSelector(
    state => ({
      data: state.fetchToDos.data,
      filterBy: state.fetchToDos.filterBy
    }),
    filterBy
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const filteredTodo = () => {
    if (filterBy === "active") {
      return data.filter(el => !el.checked);
    } else if (filterBy === "completed") {
      return data.filter(el => el.checked);
    } else {
      return data;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTodo()}
        renderItem={({ item }) => <ToDo todo={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    width: "100%",
    maxWidth: "80%"
  }
});

export default ToDoList;
