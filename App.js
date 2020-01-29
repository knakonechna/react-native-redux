import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";

import reducer from "./reducer";

import TextInput from "./components/TextInput";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

const client = axios.create({
  baseURL: "http://localhost:3000",
  responseType: "json"
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware, axiosMiddleware(client)));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TextInput />
          <ToDoList />
          <Footer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
