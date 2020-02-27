import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";
import GoalItem from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const newGoalInputHandler = enteredText => {
    console.log(enteredText);
    setEnteredGoal(enteredText);
  };

  const addGoalBtnHandler = () => {
    setCourseGoals(currentGoals => [
      ...courseGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.container}>
      <GoalInput
        newGoalMethod={newGoalInputHandler}
        cGoal={enteredGoal}
        addGoalBtnMethod={addGoalBtnHandler}
      />

      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => <GoalItem goal={itemData.item.value} />}
      />
      {/* <ScrollView style={styles.goalsContainer}>
        {courseGoals.map(goal => (
          <View key={goal} style={styles.goalView}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
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
