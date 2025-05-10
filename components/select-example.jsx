import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function SelectExample() {
  const router = useRouter();
  return (
    <View>
      <Text style={styles.text}>Đỗ Tiến Dũng </Text>
      <Text style={styles.text}>2124802010660</Text>

      <TouchableOpacity
        onPress={() => router.push("example/Exercise3/exercise3")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Exercise 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("example/Exercise4/exercise4")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Exercise 4</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("example/Exercise5")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Exercise 5</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("example/Exercise6/exercise6")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Exercise 6</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("example/Exercise7/exercise7")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Exercise 7</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.WHITE,
  },
  text: {
    fontSize: 30,
    fontFamily: "outfit-bold",
    color: Colors.PRIMARY,
  },
  button: {
    marginTop: 20,
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 20,
    fontFamily: "outfit-bold",
    textAlign: "center",
  },
});
