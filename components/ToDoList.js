import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import fetchTodosHook from "../hooks/fetchTodos";

import ToDo from "./ToDo";

const ToDoList = () => {
  const { todoData, isLoading } = fetchTodosHook();
  console.log(todoData, isLoading)
  return (
    <View style={styles.container}>
      {
        isLoading && (
          <FlatList
            data={todoData}
            renderItem={({ item }) => <ToDo todo={item} />}
            keyExtractor={item => item.id}
          />
        )
      }
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
