import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../../constants/Colors";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
  },
  text: {
    fontSize: 20,
    fontFamily: "outfit-medium",
  },
});
