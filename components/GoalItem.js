import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const GoalItem = props => {
  return (
    <TouchableNativeFeedback onPress={() => props.deleteGoal(props.goal.key)}>
    <View style={styles.goalView}>
      <Text> {props.goal.value} </Text>
    </View>
    </TouchableNativeFeedback>
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
