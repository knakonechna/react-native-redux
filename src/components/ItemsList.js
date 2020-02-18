import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ItemsList = ({ isEmpty, gifUrl, emptyText, children}) => {
  return (
    <View style={styles.container}>
      {isEmpty && (
        <View style={styles.noTask}>
          <Image
            style={{width: 150, height: 150}}
            source={{uri: gifUrl}}
          />
          <Text style={styles.noTaskText}>{emptyText}</Text>
        </View>
      )}
      {children}
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

export default ItemsList;
