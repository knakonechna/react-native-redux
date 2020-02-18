import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CheckBox from "react-native-checkbox";
import { useDispatch } from "react-redux";
import { changeTodo } from "../actions/changeTodo";
import { deleteTodo } from "../actions/deleteTodos";
import CustomIcon from "./Icon";
import { EditModeInput } from "./EditModeInput";

const Item = ({ todo }) => {
  const [editMode, setMode] = useState(false);
  const dispatch = useDispatch();

  const toggleCheck = todo => {
    const data = {
      ...todo,
      checked: !todo.checked,
    };
    dispatch(changeTodo(data));
  };

  const removeTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  const toggleEditMode = () => {
    setMode(!editMode);
  };


  return (
    <View style={styles.container}>
      {editMode ? (
        <EditModeInput
          styleInput={styles.input}
          inputValue={todo.context}
          toggleEditMode={toggleEditMode}
          todo={todo}
          icon="retweet"
        />
      ) : (
        <View style={styles.item}>
          <CheckBox
            label={todo.context}
            labelLines={2}
            style={styles.checkBoxItem}
            checked={todo.checked}
            onChange={() => toggleCheck(todo)}
            labelStyle={styles.labelStyle}
            checkboxStyle={styles.checkbox}
          />
          <View style={styles.tool}>
            <CustomIcon
              iconName={"pencil"}
              trigger={toggleEditMode}
            />
            <CustomIcon iconName="trash" trigger={removeTodo} />
          </View>
        </View>
      )}

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
  },
  tool: {
    flexDirection: "row",
    width: "20%",
    marginLeft: '-20%',
    justifyContent: "space-between"
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#000",
    color: '#000',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    fontSize: 20,
    shadowColor: "#e6c727",
    textTransform: 'uppercase',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 9,
    paddingRight: '20%',
  },
});

export default Item;
