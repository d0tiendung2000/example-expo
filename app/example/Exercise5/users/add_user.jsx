import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../../../constants/Colors";
import { useNavigation } from "expo-router";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../configs/firebase";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddUser() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [age, setAge] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddUser = async () => {
    if (!name || !dateOfBirth || !age) {
      ToastAndroid.show("Vui lòng nhập đầy đủ thông tin", ToastAndroid.BOTTOM);
      return;
    }

    console.log({
      name,
      dateOfBirth: dateOfBirth.toLocaleDateString("vi-VN"),
      age,
    });

    try {
      await addDoc(collection(db, "users"), {
        name: name,
        dateOfBirth: dateOfBirth.toLocaleDateString("vi-VN"),
        age: Number(age),
        createdAt: new Date(),
      });

      ToastAndroid.show("Thêm người dùng thành công", ToastAndroid.SHORT);
      setName("");
      setDateOfBirth(null);
      setAge("");
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Lỗi khi thêm người dùng", ToastAndroid.LONG);
    }
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDateOfBirth(selectedDate);
      setAge(calculateAge(selectedDate));
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Thêm người dùng",
    });
  }, []);
  return (
    <View style={styles.container}>
      {/* Name */}
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      {/* Date of birth */}
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.input}
      >
        <Text
          style={[styles.textInput, { color: dateOfBirth ? "#000" : "#888" }]}
        >
          {dateOfBirth
            ? dateOfBirth.toLocaleDateString("vi-VN")
            : "Chọn ngày sinh"}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={dateOfBirth || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onDateChange}
          maximumDate={new Date()}
        />
      )}

      {/* Age */}
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="Age"
          value={age.toString()}
          editable={false}
        />
      </View>
      <TouchableOpacity onPress={handleAddUser} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    height: "100%",
    padding: 20,
  },
  input: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 20,
  },
  textInput: {
    paddingVertical: 12,
    fontFamily: "outfit-bold",
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
    alignItems: "center",
    marginHorizontal: 20,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: "outfit-bold",
  },
});
