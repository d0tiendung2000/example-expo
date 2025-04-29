import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { use } from "react";

export default function Exercise4() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the default header
    });
  }, []); // Empty dependency array to run only once on mount

  return (
    <View style={styles.container}>
      {/* Custom header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      {/* Main content */}
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailScreen")}
        style={styles.button}
      >
        <Text style={styles.textButton}>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: Colors.WHITE,
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "outfit-bold",
    marginLeft: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginTop: 40,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
  },
  textButton: {
    color: Colors.WHITE,
    fontSize: 20,
    fontFamily: "outfit-bold",
    textAlign: "center",
  },
});
