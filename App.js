import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import AppContainer from "./src/navigation";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
