import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../configs/firebase"; // đảm bảo đường dẫn đúng
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";

export default function AddUser() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");

  //   const handleAddUser = async () => {
  //     if (!name || !age) {
  //       alert("Vui lòng nhập đầy đủ tên và tuổi!");
  //       return;
  //     }

  //     try {
  //       await addDoc(collection(db, "users"), {
  //         name,
  //         age: parseInt(age),
  //         createdAt: new Date(),
  //       });
  //       alert("Thêm người dùng thành công!");
  //       setName("");
  //       setAge("");
  //     } catch (error) {
  //       console.error("Lỗi khi thêm document: ", error);
  //       alert("Thêm thất bại!");
  //     }
  //   };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Vui lòng đăng nhập trong Exercise3</Text>
        <TouchableOpacity
          // onPress={() => router.push("/example/Exercise5/todo/todo_list")}
          onPress={() => router.push("/example/Exercise3/exercise3")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go to Login</Text>
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.title}>Thêm người dùng</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Tuổi"
        value={age}
        keyboardType="numeric"
        onChangeText={setAge}
      />
      <Button title="Add" onPress={handleAddUser} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY,
    height: "100%",
    paddingTop: 150,
  },
  view: {
    backgroundColor: Colors.WHITE,
    marginTop: 150,
    height: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  text: {
    fontSize: 40,
    fontFamily: "outfit-bold",
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 15,
    marginTop: 50,
    alignItems: "center",
    marginHorizontal: 20,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: "outfit-bold",
  },
  //   title: { fontSize: 18, marginBottom: 10 },
  //   input: {
  //     borderWidth: 1,
  //     borderColor: "#ccc",
  //     borderRadius: 8,
  //     padding: 10,
  //     marginBottom: 10,
  //   },
});
