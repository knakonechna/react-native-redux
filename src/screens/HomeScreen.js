import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../hooks/fetchTodos";
import { addPages } from "../actions/addNewPage";

import CustomIcon from "../components/Icon";
import TodosCreator from "../components/TodosCreator";
import ToDoList from "../components/ToDoList";
import Footer from "../components/Footer";
import { filterKey, filtered } from "../constants";

export const HomeScreen = props => {
  const { data, filterBy, pages } = useSelector(
    ({ fetchToDos }) => ({
      data: fetchToDos.data,
      filterBy: fetchToDos.filterBy,
      pages: fetchToDos.pages,
      isLoading: fetchToDos.isLoading
    }),
    filterBy
  );
  const dispatch = useDispatch();
  const { navigation } = props;
  const pageId = navigation.state.params ? navigation.state.params.pageId : 1;
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
      <View style={styles.pageCreatorWrap}>
        <CustomIcon
          iconName="plus"
          iconSize={20}
          text="add new page"
          textStyle={{
            fontSize: 14,
            textTransform: "uppercase",
            marginLeft: 10,
            fontWeight: "bold"
          }}
          trigger={() => dispatch(addPages(pages + 1, navigation))}
        />
      </View>
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
  },
  pageCreatorWrap: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    maxWidth: "80%"
  }
});
