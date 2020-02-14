import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import fetchTodos from "../hooks/fetchTodos";

import Navigation from "../components/Navigation";
import TodosCreator from "../components/TodosCreator";
import ToDoList from "../components/ToDoList";
import Footer from "../components/Footer";
import { filterKey, filtered, createUniqId } from "../constants";

export const ContentScreen = props => {
  const { data, filterBy, pages, pageIds, isLoading } = useSelector(
    ({ fetchToDos }) => ({
      data: fetchToDos.data,
      filterBy: fetchToDos.filterBy,
      pages: fetchToDos.pages,
      pageIds: fetchToDos.pageIds,
      isLoading: fetchToDos.isLoading
    }),
    filterBy
  );

  const { navigation } = props;
  const {
    state: { params }
  } = navigation;

  let ids = pageIds;
  let currIndex = params ? params.index : 0;
  let pageId = isLoading && ids[currIndex];
  if (isLoading && ids.length === 0 && !pageId) {
    ids.push(pageId);
  }
  fetchTodos();

  const improveData = () => {
    const filteredData = {};
    filterKey.forEach(el => {
      filteredData[el.key] = filtered(data, el.key, pageId);
    });

    return filteredData;
  };

  const filteredArray = improveData()[filterBy];
  return (
    <View style={styles.container}>
      <TodosCreator pageId={pageId} />
      <Navigation
        pages={pages}
        pageId={pageId}
        navigation={navigation}
        pageIds={pageIds}
        currIndex={currIndex}
        todos={improveData()["all"].ids}
      />
      <ToDoList data={filteredArray.todos} />
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
  }
});
