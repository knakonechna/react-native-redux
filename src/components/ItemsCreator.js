import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import TextTicker from "react-native-text-ticker";
import { postNewTodo } from "../actions/postNewTodo";
import { useDispatch } from "react-redux";
import CustomIcon from "./Icon";
import { addPages } from "../actions/postCategory";

const ItemCreator = ({
  icon,
  postCategories,
  categoryId,
  inputStyle,
  titleStyle,
  placeholder,
  name
}) => {
  const [value, onChangeText] = useState("");
  const dispatch = useDispatch();

  const createNewItem = () => {
    if (value.length > 2) {
      postCategories
        ? dispatch(addPages(value))
        : dispatch(postNewTodo(value, categoryId));
      onChangeText("");
    }
  };

  return (
    <View style={styles.container}>
      {!postCategories && (
        <View style={styles.tickerWrapper}>
          <TextTicker
            style={titleStyle}
            duration={3000}
            loop
            marqueeDelay={1000}
          >
            Create New Task For {name}!
          </TextTicker>
        </View>
      )}

      <View style={styles.wrapper}>
        <TextInput
          style={inputStyle}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder={placeholder}
          blurOnSubmit
          onBlur={createNewItem}
          placeholderTextColor={"#000"}
        />
        <View style={styles.icon}>
          <CustomIcon iconName={icon} trigger={createNewItem} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginBottom: 10
  },
  tickerWrapper: {
    backgroundColor: "#000",
    marginBottom: 20,
    padding: 3
  },
  wrapper: {
    position: "relative",
    width: "100%"
  },
  icon: {
    position: "absolute",
    height: "100%",
    width: 50,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    top: 2
  }
});

export default ItemCreator;
