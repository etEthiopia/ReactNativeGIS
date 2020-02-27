import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = props => {
  return (
    <View style={styles.goalView}>
      <Text> {props.goal} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalView: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 5
  }
});

export default GoalItem;
