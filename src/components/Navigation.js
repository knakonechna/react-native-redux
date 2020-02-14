import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomIcon from "./Icon";
import { useDispatch } from "react-redux";
import { addPages } from "../actions/addNewPage";
import { removePages } from "../actions/removePage";
import { createUniqId } from "../constants";

const Navigation = ({ pages, navigation, currIndex, pageIds, todos }) => {
  const dispatch = useDispatch();
  const page = currIndex + 1;
  const createNewPage = () => {
    const newId = createUniqId();
    dispatch(addPages(newId, pages + 1, navigation, pageIds));
  };

  const removePage = () => {
    const filteredArray = pageIds.filter(id => id !== pageIds[currIndex]);
    dispatch(
      removePages(pageIds[currIndex - 1], pages - 1, navigation, filteredArray, todos)
    );
  };

  const navPrev = () => {
    navigation.navigate("Content", {
      pageId: pageIds[currIndex - 1],
      index: currIndex - 1
    });
  };

  const navNext = () => {
    navigation.navigate("Content", {
      pageId: pageIds[currIndex + 1],
      index: currIndex + 1
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.indicatorWrapper}>
        <Text style={[styles.text, styles.pageIndicator]}>Page {currIndex + 1}: {pages}</Text>
      </View>
      <View style={styles.arrowWrapper}>
        <View>
          {page > 1 && (
            <CustomIcon iconName="arrow-left" iconSize={20} trigger={navPrev} />
          )}
        </View>
        <View>
          {page < pages && (
            <CustomIcon
              iconName="arrow-right"
              iconSize={20}
              trigger={navNext}
            />
          )}
        </View>
      </View>
      <View style={styles.buttonsWrapper}>
        <View>
          <CustomIcon
            iconName="plus"
            iconSize={20}
            text="add"
            textStyle={styles.text}
            trigger={createNewPage}
          />
        </View>
        <View>
          {pages > 1 && (
            <CustomIcon
              iconName="minus"
              text="remove"
              textStyle={styles.text}
              iconSize={20}
              trigger={removePage}
            />
          )}
        </View>
      </View>
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
    flexDirection: "row",
    flex: 2.3,
  },
  buttonsWrapper: {
    flex: 3,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default Navigation;
