import React from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";

import ToDo from "./ToDo";

const ToDoList = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.length === 0 && (
        <View style={styles.noTask}>
          <Image
            style={{width: 150, height: 100}}
            source={{uri: 'https://media.giphy.com/media/l4FGwMO7epx7FEH8Q/giphy.gif'}}
          />
          <Text style={styles.noTaskText}>No tasks</Text>
        </View>
      )}
      <FlatList
        data={data}
        renderItem={({ item }) => <ToDo todo={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    width: "100%",
    maxWidth: "80%"
  },
  noTask: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  noTaskText: {
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default ToDoList;
