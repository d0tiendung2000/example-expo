import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ForgotPassword() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="caret-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={[styles.text, { marginTop: 70 }]}>Reset your password</Text>

      {/*Nhap Email */}
      <View style={styles.input}>
        <MaterialIcons
          name="email"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
        <TextInput style={styles.textInput} placeholder="Enter Email" />
      </View>

      {/*Button Send reset email*/}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send reset email</Text>
      </TouchableOpacity>

      {/*Back to login*/}
      <TouchableOpacity
        onPress={() => router.back()}
        style={[styles.button, { backgroundColor: Colors.WHITE }]}
      >
        <Text style={[styles.buttonText, { color: Colors.PRIMARY }]}>
          Go back to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,

    backgroundColor: Colors.WHITE,
    height: "100%",
  },
  button: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: Colors.PRIMARY,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontFamily: "outfit-medium",
    fontSize: 20,
    color: Colors.WHITE,
  },
  text: {
    fontSize: 30,
    fontFamily: "outfit-bold",
    textAlign: "center",
    color: Colors.PRIMARY,
    marginTop: 20,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    marginTop: 20,
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    fontFamily: "outfit-bold",
  },
  textError: {
    color: Colors.GRAY,
    fontSize: 14,
    fontFamily: "outfit-bold",
    marginTop: 5,
    marginLeft: 10,
  },
});
