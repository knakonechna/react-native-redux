import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import CustomIcon from "./Icon";
import { EditModeInput } from "./EditModeInput";
import { deleteCategory } from "../actions/removeCategory";

const CategoryItem = ({ category, navigation, tasks}) => {
  const [editMode, setMode] = useState(false);
  const dispatch = useDispatch();

  const removeCategory = () => {
    const tasksIds = Object.keys(tasks).filter(el => tasks[el].categoryId === category.id).map(el => tasks[el].id);
    dispatch(deleteCategory(category.id, tasksIds));
  };

  const toggleEditMode = () => {
    setMode(!editMode);
  };

  return (
    <View style={styles.container}>
      {editMode ? (
        <EditModeInput
          styleInput={styles.input}
          inputValue={category.name}
          toggleEditMode={toggleEditMode}
          category={category}
          icon="send"
        />
      ) : (
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Content", { categoryId: category.id , name: category.name})
            }
          >
            <Text style={styles.name}>{category.name}</Text>
          </TouchableOpacity>
          <View style={styles.tool}>
            <CustomIcon iconName="edit" trigger={toggleEditMode} />
            <CustomIcon iconName="close" trigger={removeCategory} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#f0f0f0',
    marginBottom: 5
  },
  deleteButton: {
    fontSize: 16,
    color: "red"
  },
  tool: {
    flexDirection: "row",
    width: "20%",
    marginLeft: "-20%",
    justifyContent: "space-between"
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#000",
    color: "#000",
    fontWeight: "bold",
    borderBottomWidth: 2,
    fontSize: 20,
    shadowColor: "#e6c727",
    textTransform: "uppercase",
    paddingRight: 20,
    paddingLeft: 20
  },
  name: {
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontWeight: 'bold'
  }
});

export default CategoryItem;
