import React from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";

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
  const condition = el => data[el].checked;
  const isActive = filterBy === "active";

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const filteredTodo = () => {
    let result;
    if (filterBy === "all") {
      result = Object.keys(data);
    } else {
      result = Object.keys(data).filter(el =>
        isActive ? !condition(el) : condition(el)
      );
    }
    return result.map(i => data[i]);
  };

  return (
    <View style={styles.container}>
      {filteredTodo().length === 0 && (
        <View style={styles.noTask}>
          <Image
            style={{width: 150, height: 100}}
            source={{uri: 'https://media.giphy.com/media/l4FGwMO7epx7FEH8Q/giphy.gif'}}
          />
          <Text style={styles.noTaskText}>No tasks</Text>
        </View>
      )}
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
    flex: 9,
    width: "100%",
    maxWidth: "80%"
  },
  noTask: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  noTaskText: {
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default ToDoList;
