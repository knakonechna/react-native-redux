import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import TextTicker from "react-native-text-ticker";
import { postNewTodo } from "../actions/postNewTodo";
import { useDispatch } from "react-redux";

const TodosCreator = () => {
  const [value, onChangeText] = useState("");
  const dispatch = useDispatch();

  const createNewTask = () => {
    if (value.length > 3) {
      dispatch(postNewTodo(value));
      onChangeText("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tickerWrapper}>
        <TextTicker
          style={styles.title}
          duration={3000}
          loop
          marqueeDelay={1000}
        >
          Create New Task For Today!
        </TextTicker>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder={"Write your task"}
        blurOnSubmit
        onBlur={createNewTask}
        placeholderTextColor={'#000'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginBottom: 25
  },
  title: {
    fontSize: 30,
    color: 'red',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#000",
    color: '#000',
    fontWeight: 'bold',
    borderWidth: 4,
    paddingLeft: 15,
    borderRadius: 5,
    fontSize: 20,
    shadowColor: "red",
    textTransform: 'uppercase',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 9,
  },
  tickerWrapper: {
    backgroundColor: '#000',
    marginBottom: 20,
    padding: 3
  }
});

export default TodosCreator;
