import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import CustomIcon from "./Icon";
import { useDispatch } from "react-redux";
import { changeTodo } from "../actions/changeTodo";

export const EditModeInput = props => {
  const [text, setText] = useState(props.inputValue);
  const dispatch = useDispatch();

  const rewordTodo = () => {
    const data = {
      ...props.todo,
      context: text
    };

    dispatch(changeTodo(data));
    props.toggleEditMode();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={props.styleInput}
        value={text}
        onChangeText={text => setText(text)}
        placeholder={"Write your task"}
        placeholderTextColor={"#000"}
      />
      <View style={styles.icon}>
        <CustomIcon iconName="retweet" trigger={rewordTodo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
	  alignItems: 'center',
    maxWidth: "100%"
  },
  icon: {
    marginLeft: "-10%"
  }
});
