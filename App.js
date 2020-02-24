import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoal, setEnterGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnterGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    //[...courseGoals, enteredGoal]
  };

  return (
    <View>
      <View style={styles.screen}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <TextInput
            onChangeText={goalInputHandler}
            placeholder="Enter a new Goal"
            style={styles.inputText}
            value={enteredGoal}
          />
          <Button title="ADD" onPress={addGoalHandler} />
        </View>

        <View>
          {courseGoals.map(goal => (
            <Text>{goal}</Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  screen: {
    padding: 30
  },
  inputText: {
    borderBottomColor: "black",
    width: "80%",
    borderBottomColor: "grey",
    borderBottomWidth: 0.5
  }
});
