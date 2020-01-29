import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { fetchTodos } from '../actions/getTodosList';
import axios from "axios";
import {connect} from "react-redux";

const TodosCreator = ({fetchTodos}) => {
  const [value, onChangeText] = useState("");

  const createNewTask = () => {
	  axios.post('http://localhost:3000/tasks', {
		  "context": value,
		  "checked": false
	  }).then(() => {
	    onChangeText('');
      fetchTodos()
    });
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

export default connect(null, { fetchTodos })(TodosCreator);
