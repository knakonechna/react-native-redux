import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CheckBox from "react-native-checkbox";
import { useDispatch } from "react-redux";
import { checkTodo } from "../actions/checkTodo";
import { deleteTodo } from "../actions/deleteTodos";
import Icon from "react-native-vector-icons/FontAwesome";

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
        labelStyle={styles.labelStyle}
        checkboxStyle={styles.checkbox}
      />

      <TouchableOpacity onPress={removeTodo}>
        <Text>
          <Icon name="close" size={30} color="#900" />
        </Text>
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
    fontSize: 16,
    color: "red"
  },
  checkBoxItem: {
    textTransform: "uppercase"
  },
  labelStyle: {
    fontSize: 18,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: "#000",
    fontWeight: "bold"
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 4,
    borderRadius: 5
  }
});

export default ToDo;
