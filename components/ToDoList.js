import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ToDo from "./ToDo";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../actions/getTodosList";

const ToDoList = () => {
  const { data } = useSelector(state => state.fetchToDos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
