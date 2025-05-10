import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../../constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Home() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.text}>Danh sách người dùng</Text>
        <TouchableOpacity
          onPress={() => router.push("/example/Exercise5/users/add_user")}
        >
          <MaterialIcons
            name="add-circle"
            size={30}
            color="black"
            style={{
              marginTop: 8,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.user}></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    height: "100%",
    padding: 20,
    paddingTop: 75,
  },
  text: {
    fontSize: 25,
    fontFamily: "outfit-bold",
  },
  user: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    marginTop: 20,
    backgroundColor: Colors.GRAY,
  },
});
