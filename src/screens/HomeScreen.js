import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import TodosCreator from "../components/TodosCreator";
import ToDoList from "../components/ToDoList";
import Footer from "../components/Footer";
import { filterKey } from "../constants";

import { fetchTodos } from "../actions/getTodosList";

export const HomeScreen = () => {
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

  const filtered = key => {
    let result = [];

    if (key === "active") {
      result = Object.keys(data).filter(item => !data[item].checked);
    } else if (key === "completed") {
      result = Object.keys(data).filter(item => data[item].checked);
    } else {
      result = Object.keys(data);
    }

    return {
      todos: result.map(i => data[i]),
      count: result.length
    };
  };

  const improveData = () => {
    const filteredData = {};

    filterKey.forEach(el => {
      filteredData[el.key] = filtered(el.key);
    });

    return filteredData;
  };

  const filteredArray = improveData()[filterBy];
  return (
    <View style={styles.container}>
      <TodosCreator />
      <ToDoList data={filteredArray.todos} />
      <Footer data={improveData()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d4deda",
    paddingTop: 50
  }
});
