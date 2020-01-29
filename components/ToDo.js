import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CheckBox from "react-native-checkbox";
import axios from "axios";

const ToDo = ({ todo }) => {
  const [checked, setChecked] = useState(todo.checked);

  const checkTodo = todo => {
    axios
      .put(`http://localhost:3000/tasks/${todo.id}`, {
        ...todo,
        checked: !checked
      })
      .then(data => setChecked(data.data.checked));
  };

  return (
    <View style={styles.item}>
      <CheckBox
        label={todo.context}
        labelLines={2}
        style={styles.checkBoxItem}
        checked={checked}
        onChange={() => checkTodo(todo)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    paddingTop: 20
  },
  checkBoxItem: {
    width: 30,
    height: 30
  }
});

export default ToDo;
