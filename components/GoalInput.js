import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export const GoalInput = props => {
  return (
    <View style={styles.addGoal}>
      <TextInput
        onChangeText={props.newGoalMethod}
        value={props.cGoal}
        style={styles.newGoal}
        placeholder="New Goal"
      />
      <Button onPress={props.addGoalBtnMethod} title="ADD" />
    </View>
  );
};

const styles = StyleSheet.create({
  addGoal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  newGoal: {
    padding: 5,
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});
