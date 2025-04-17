import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { use } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import LottieView from "lottie-react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";

export default function Lab2() {
  const navigation = useNavigation();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Lab 2",
    });
  }, []);

  const OnClickLogin = () => {
    let valid = true;

    if (email.trim() === "") {
      setEmailError("Please enter Email");
      valid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      setEmailError("Email format example@gmail.com");
      valid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Please enter Password");
      valid = false;
    }
  };

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View>
        <LottieView
          source={require("../../../assets/json/fire-base.json")}
          autoPlay
          loop
          style={{
            width: 250,
            height: 250,
            alignSelf: "center",
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
          textAlign: "center",
          color: Colors.PRIMARY,
          marginTop: 20,
        }}
      >
        Welcome Back!
      </Text>

      {/*Nhap Email*/}

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
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (text.trim() !== "") setEmailError("");
          }}
          style={{
            flex: 1,
            paddingVertical: 12,
            fontFamily: "outfit-regular",
          }}
          placeholder="Enter Email"
        />
      </View>
      {emailError !== "" && (
        <Text
          style={{
            color: Colors.GRAY,
            fontSize: 14,
            fontFamily: "outfit-bold",
            marginTop: 5,
            marginLeft: 10,
          }}
        >
          {emailError}
        </Text>
      )}

      {/* Nhập Password */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
          borderWidth: 2,
          borderRadius: 15,
          borderColor: Colors.GRAY,
          marginTop: 20,
          position: "relative",
        }}
      >
        <FontAwesome6
          name="key"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
        <TextInput
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (text.trim() !== "") setPasswordError("");
          }}
          secureTextEntry={!showPassword}
          style={{
            flex: 1,
            paddingVertical: 12,
            fontFamily: "outfit-regular",
            paddingRight: 35, // chừa chỗ cho con mắt
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
      {passwordError !== "" && (
        <Text
          style={{
            color: Colors.GRAY,
            fontSize: 14,
            fontFamily: "outfit-bold",
            marginTop: 5,
            marginLeft: 10,
          }}
        >
          {passwordError}
        </Text>
      )}

      {/*Button Login*/}
      <TouchableOpacity
        onPress={OnClickLogin}
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
          Login
        </Text>
      </TouchableOpacity>

      {/*Button Create Account*/}
      <TouchableOpacity
        onPress={() => router.push("example/Exercise2/create-account")}
        style={{
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
          Create a new account
        </Text>
      </TouchableOpacity>

      {/*Button Forgot Password*/}
      <TouchableOpacity
        onPress={() => router.push("example/Exercise2/forgot-password")}
        style={{
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
          Forgot Password
        </Text>
      </TouchableOpacity>
    </View>
  );
}
