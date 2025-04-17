import { View, Text, TextInput, TouchableOpacity } from "react-native";
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
    <View
      style={{
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="caret-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
          textAlign: "center",
          color: Colors.PRIMARY,
          marginTop: 100,
        }}
      >
        Reset your password
      </Text>

      {/*Nhap Email */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
          borderWidth: 2,
          borderRadius: 15,
          borderColor: Colors.GRAY,
          marginTop: 20,
        }}
      >
        <MaterialIcons
          name="email"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 12,
            fontFamily: "outfit-regular",
          }}
          placeholder="Enter Email"
        />
      </View>

      {/*Button Send reset email*/}
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 15,
          borderRadius: 15,
          backgroundColor: Colors.PRIMARY,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
            color: Colors.WHITE,
          }}
        >
          Send reset email
        </Text>
      </TouchableOpacity>

      {/*Back to login*/}
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          marginTop: 1,
          padding: 15,
          borderRadius: 15,
          backgroundColor: Colors.WHITE,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
            color: Colors.PRIMARY,
          }}
        >
          Go back to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
