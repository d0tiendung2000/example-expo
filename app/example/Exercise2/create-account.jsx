import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CreateAccount() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
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
        Create a new account!
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

      {/*Nhap Password */}
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
        <FontAwesome6
          name="key"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
        <TextInput
          secureTextEntry={!showPassword}
          style={{
            flex: 1,
            paddingVertical: 12,
            fontFamily: "outfit-regular",
            paddingRight: 35,
          }}
          placeholder="Enter Password"
        />

        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={{
            position: "absolute",
            right: 15,
          }}
        >
          <Feather
            name={showPassword ? "eye" : "eye-off"}
            size={22}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/*Nhap Confirm Password */}
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
        <FontAwesome6
          name="key"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
        <TextInput
          secureTextEntry={!showPassword}
          style={{
            flex: 1,
            paddingVertical: 12,
            fontFamily: "outfit-regular",
          }}
          placeholder="Enter Confirm Password"
        />

        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={{
            position: "absolute",
            right: 15,
          }}
        >
          <Feather
            name={showPassword ? "eye" : "eye-off"}
            size={22}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/*Button SignUp*/}
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
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
