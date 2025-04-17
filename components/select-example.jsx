import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function SelectExample() {
  const router = useRouter();
  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",

            color: Colors.PRIMARY,
          }}
        >
          Đỗ Tiến Dũng{" "}
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",

            color: Colors.PRIMARY,
          }}
        >
          2124802010660
        </Text>
      </View>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "outfit-bold",
            marginBottom: 10,
          }}
        >
          Login, CreateNewAccout, ResetPassword
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => router.push("example/Exercise2/lab2")}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 20,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Lab 2
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("example/Exercise3/lab3")}
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 20,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Lab 3
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("example/Exercise4/lab4")}
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 20,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Lab 4
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("example/Exercise5/lab5")}
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 20,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Lab 5
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("example/Exercise6/lab6")}
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 20,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Lab 6
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("example/Exercise7/lab7")}
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 20,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Lab 7
        </Text>
      </TouchableOpacity>
    </View>
  );
}
