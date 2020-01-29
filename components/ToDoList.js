import React, { useEffect  } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { connect, useSelector } from "react-redux";
import { fetchTasks } from "../actions/getTasksList";

import ToDo from "./ToDo";

const ToDoList = ({ fetchTasks }) => {
  const { tasks, isLoading } = useSelector(state => state.fetchToDos);
  useEffect(() => {
    fetchTasks();
  }, []);
  console.log(tasks);
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <ToDo task={item} />}
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

export default connect(null, { fetchTasks })(ToDoList);
