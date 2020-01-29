import React, { useEffect  } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { connect, useSelector } from "react-redux";
import { fetchTodos } from "../actions/getTodosList";

import ToDo from "./ToDo";

const ToDoList = ({ fetchTodos }) => {
  const { todos, isLoading } = useSelector(state => state.fetchToDos);
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
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

export default connect(null, { fetchTodos })(ToDoList);
