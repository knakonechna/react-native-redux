import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CategoriesCreator from "../components/ItemsCreator";
import CategoryItem from "../components/CategoryItem";
import ItemsList from "../components/ItemsList";
import { useSelector } from "react-redux";
import fetchCategories from "../hooks/fetchCategories";

export const CategoriesScreen = (props) => {
  const { categories, tasks } = useSelector(
    ({ fetchCategories, fetchToDos }) => ({
      categories: fetchCategories.categories,
      tasks: fetchToDos.tasks,
    }),
  );
  const { navigation } = props;
  const data = Object.keys(categories).map(el => categories[el]);
  fetchCategories();
  return (
    <View style={styles.container}>
      <CategoriesCreator
        postCategories
        icon={"plus"}
        inputStyle={styles.input}
        placeholder={"Create your categories"}
      />
      <ItemsList
        emptyText={"no category"}
        isEmpty={data.length === 0}
        gifUrl={"https://media.giphy.com/media/A5PYmtufdQIjD37IC0/giphy.gif"}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => <CategoryItem tasks={tasks} category={item} navigation={navigation} />}
          keyExtractor={item => item.id.toString()}
        />
      </ItemsList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 50,
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
    textTransform: "uppercase"
  }
});
