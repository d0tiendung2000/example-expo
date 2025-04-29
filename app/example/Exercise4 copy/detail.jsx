import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../../../constants/Colors";

export default function Detail() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        name="exercise4"
        options={{ headerShown: true, title: "Details" }}
      />
      <Text>Detail Screens</Text>
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
});
