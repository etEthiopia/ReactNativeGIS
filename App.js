import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("Pre Text");
  return (
    <View
      style={{
        backgroundColor: "blue",
        padding: 50,
        flexDirection: "row",
        width: "80%",
        height: 300,
        justifyContent: "center"
      }}
    >
      <View
        style={{
          backgroundColor: "green",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "white", fontSize: 30 }}>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "black", fontSize: 30 }}>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "white", fontSize: 30 }}>3</Text>
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
  }
});
