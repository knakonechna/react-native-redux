import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomIcon from "./Icon";
import { useDispatch } from "react-redux";
import { addPages } from "../actions/addNewPage";

const Navigation = props => {
  const dispatch = useDispatch();

  const createNewPage = () => {
    dispatch(addPages(props.pages + 1, props.navigation));
  };

  const navPrev = () => {
    props.navigation.navigate("Content", { pageId: props.pageId - 1 });
  };

  const navNext = () => {
    props.navigation.navigate("Content", { pageId: props.pageId + 1 });
  };

  return (
    <View style={styles.container}>
      <View style={styles.indicatorWrapper}>
        <Text style={[styles.text, styles.pageIndicator]}>
          Pages: {props.pages}
        </Text>
        <Text style={[styles.text, styles.pageIndicator]}>
          Page: {props.pageId}
        </Text>
      </View>
      <View style={styles.arrowWrapper}>
        <View>
          {props.pageId > 1 && (
            <CustomIcon iconName="arrow-left" iconSize={20} trigger={navPrev} />
          )}
        </View>
        <View>
          {props.pageId < props.pages && (
            <CustomIcon
              iconName="arrow-right"
              iconSize={20}
              trigger={navNext}
            />
          )}
        </View>
      </View>
      <CustomIcon
        iconName="plus"
        iconSize={20}
        text="add new page"
        textStyle={styles.text}
        trigger={createNewPage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    maxWidth: "80%",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 14,
    textTransform: "uppercase",
    marginLeft: 5,
    fontWeight: "bold"
  },
  arrowWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10
  },
  pageIndicator: {
    marginLeft: 0,
    marginRight: 10
  },
  indicatorWrapper: {
    flexDirection: "row"
  }
});

export default Navigation;
