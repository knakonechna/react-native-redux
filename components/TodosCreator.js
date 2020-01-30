import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { postNewTodo } from '../actions/postNewTodo';
import {useDispatch} from "react-redux";

const TodosCreator = () => {
  const [value, onChangeText] = useState("");
  const dispatch = useDispatch();

  const createNewTask = () => {
    if (value.length > 3) {
      dispatch(postNewTodo(value));
      onChangeText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Task For Today!</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder={"Write your task"}
        blurOnSubmit
        onBlur={createNewTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%"
  },
  title: {
    paddingBottom: 20
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#444040",
    borderWidth: 2,
    paddingLeft: 15,
    borderRadius: 5
  }
});

export default TodosCreator;
