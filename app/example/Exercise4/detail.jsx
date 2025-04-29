import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Stack, useNavigation } from "expo-router";
import { Colors } from "../../../constants/Colors";
import { use } from "react";

export default function Detail() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Details",
    });
  }, []);

  return (
    <View style={styles.container}>
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
