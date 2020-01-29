import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CheckBox from "react-native-checkbox";
import axios from "axios";

const ToDo = ({ task }) => {
  const [checked, setChecked] = useState(task.checked);

  const checkTask = task => {
    axios
      .put(`http://localhost:3000/tasks/${task.id}`, {
        ...task,
        checked: !checked
      })
      .then(val => setChecked(val.data.checked));
  };

  return (
    <View style={styles.item}>
      <CheckBox
        label={task.context}
        labelLines={2}
        style={styles.checkBoxItem}
        checked={checked}
        onChange={() => checkTask(task)}
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
