import React, { useState } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
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

  const deleteGoalHandler = goaltoDelete => {
    setCourseGoals(currentGoals => {
      return  currentGoals.filter((goal)=>goal.key  !== goaltoDelete)
    })
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
        keyExtractor={(item, index) => item.key}
        renderItem={itemData => (
          <GoalItem goal={itemData.item} deleteGoal={deleteGoalHandler} />
        )}
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
