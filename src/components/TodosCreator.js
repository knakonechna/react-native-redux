import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import TextTicker from "react-native-text-ticker";
import { postNewTodo } from "../actions/postNewTodo";
import { useDispatch } from "react-redux";
import CustomIcon from "./Icon";

const TodosCreator = ({ pageId }) => {
  const [value, onChangeText] = useState("");
  const dispatch = useDispatch();

  const createNewTask = () => {
    if (value.length > 2) {
      dispatch(postNewTodo(value, pageId));
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
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder={"Write your task"}
          blurOnSubmit
          onBlur={createNewTask}
          placeholderTextColor={"#000"}
        />
        <View style={styles.icon}>
          <CustomIcon iconName="plane" trigger={createNewTask} />
        </View>
      </View>
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
    color: '#e6c727',
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
    shadowColor: "#e6c727",
    textTransform: 'uppercase',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 9,
  },
  tickerWrapper: {
    backgroundColor: '#000',
    marginBottom: 20,
    padding: 3
  },
  wrapper: {
    position: 'relative',
    width: '100%'
  },
  icon: {
    position: 'absolute',
    height: '100%',
    width: 50,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    top: 2
  }
});

export default TodosCreator;
