import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const newGoalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalBtnHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addGoal}>
        <TextInput
          onChangeText={newGoalInputHandler}
          value={enteredGoal}
          style={styles.newGoal}
          placeholder="New Goal"
        />
        <Button onPress={addGoalBtnHandler} title="ADD" />
      </View>
      <ScrollView style={styles.goalsContainer}>
        {courseGoals.map(goal => (
          <View key={goal} style={styles.goalView}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 15
  },
  addGoal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  newGoal: {
    padding: 5,
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  goalsContainer: {
    paddingVertical: 10
  },
  goalView: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 5
  }
});
