import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CheckBox from "react-native-checkbox";
import { useDispatch } from "react-redux";
import { checkTodo } from "../actions/checkTodo";
import { deleteTodo } from "../actions/deleteTodos";

const ToDo = ({ todo }) => {
  const [checked, setChecked] = useState(todo.checked);
  const dispatch = useDispatch();

  const toggleCheck = todo => {
    dispatch(checkTodo(todo));
    setChecked(!checked);
  };

  const removeTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <View style={styles.item}>
      <CheckBox
        label={todo.context}
        labelLines={2}
        style={styles.checkBoxItem}
        checked={checked}
        onChange={() => toggleCheck(todo)}
      />
      <TouchableOpacity onPress={removeTodo}>
        <Text style={styles.deleteButton}>remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  deleteButton: {
    fontSize: 14,
    color: "red"
  },
  checkBoxItem: {
    width: 30,
    height: 30
  }
});

export default ToDo;
