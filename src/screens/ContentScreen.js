import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import fetchTodos from "../hooks/fetchTodos";

import Navigation from "../components/Navigation";
import TodosCreator from "../components/ItemsCreator";
import ItemsList from "../components/ItemsList";
import Footer from "../components/Footer";
import { filterKey, filtered } from "../constants";
import Item from "../components/Item";

export const ContentScreen = props => {
  const { tasks, filterBy } = useSelector(
    ({ fetchToDos }) => ({
      tasks: fetchToDos.tasks,
      filterBy: fetchToDos.filterBy
    }),
    filterBy
  );

  const { navigation } = props;
  const {
    state: { params }
  } = navigation;
  const categoryId = params.categoryId;
  const name = params.name;
  console.log(tasks, categoryId)
  fetchTodos();

  const improveData = () => {
    const filteredData = {};
    filterKey.forEach(el => {
      filteredData[el.key] = filtered(tasks, el.key, categoryId);
    });

    return filteredData;
  };

  const filteredArray = improveData()[filterBy];
  return (
    <View style={styles.container}>
      <TodosCreator
        inputStyle={styles.input}
        titleStyle={styles.title}
        placeholder={"Write your first task"}
        icon={"plane"}
        categoryId={categoryId}
        name={name}
      />
      <ItemsList
        emptyText={"no task"}
        isEmpty={filteredArray.todos.length === 0}
        gifUrl={"https://media.giphy.com/media/l4FGwMO7epx7FEH8Q/giphy.gif"}
      >
        <FlatList
          data={filteredArray.todos}
          renderItem={({ item }) => <Item todo={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </ItemsList>
      <Footer data={improveData()} filterBy={filterBy} />
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
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#000",
    color: "#000",
    fontWeight: "bold",
    borderWidth: 4,
    paddingLeft: 15,
    borderRadius: 5,
    fontSize: 20,
    shadowColor: "#e6c727",
    textTransform: "uppercase",
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 9
  },
  title: {
    fontSize: 30,
    color: "#e6c727",
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});
