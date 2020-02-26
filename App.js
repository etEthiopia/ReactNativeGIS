import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");


  const newGoalInputHandler = enteredText =>{
    setEnteredGoal(enteredText);
  }

  const addGoalBtnHandler = () => {
    console.log(enteredGoal);
  }

  return (
    <View style={styles.container}>
      <View style={styles.addGoal}> 
        <TextInput onChangeText={newGoalInputHandler} value={enteredGoal} style={styles.newGoal} placeholder="New Goal" />
        <Button onPress={addGoalBtnHandler} title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 15
  },
  addGoal:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  newGoal: {
    padding: 5,
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});
