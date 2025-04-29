import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";
import { useNavigation, useRouter } from "expo-router";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Exercise4() {
  const navigation = useNavigation();
  const router = useRouter();

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(""); // 👈 thêm state selected item
  const slideAnim = useRef(new Animated.Value(-SCREEN_WIDTH)).current;

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
    Animated.timing(slideAnim, {
      toValue: drawerVisible ? -SCREEN_WIDTH : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Home",
      headerTitleStyle: {
        fontFamily: "outfit-bold",
      },
      headerLeft: () => (
        <TouchableOpacity style={{ marginTop: 5 }} onPress={toggleDrawer}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, toggleDrawer]);

  // Hàm chọn item
  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.drawer, { left: slideAnim }]}>
        <TouchableOpacity
          style={[styles.icon, selectedItem === "Home" && styles.activeButton]}
          onPress={() => handleSelect("Home")}
        >
          <Ionicons
            name="home"
            size={30}
            color={selectedItem === "Home" ? Colors.WHITE : "black"}
          />
          <Text
            style={[
              styles.drawerItem,
              selectedItem === "Home" && styles.activeText,
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.icon,
            selectedItem === "Profile" && styles.activeButton,
          ]}
          onPress={() => handleSelect("Profile")}
        >
          <Ionicons
            name="person"
            size={30}
            color={selectedItem === "Profile" ? Colors.WHITE : "black"}
          />
          <Text
            style={[
              styles.drawerItem,
              selectedItem === "Profile" && styles.activeText,
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.icon,
            selectedItem === "Logout" && styles.activeButton,
          ]}
          onPress={() => handleSelect("Logout")}
        >
          <Ionicons
            name="log-out"
            size={30}
            color={selectedItem === "Logout" ? Colors.WHITE : "black"}
          />
          <Text
            style={[
              styles.drawerItem,
              selectedItem === "Logout" && styles.activeText,
            ]}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("example/Exercise4/detail")}
      >
        <Text style={styles.textButton}>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.WHITE,
    paddingTop: 200,
  },
  drawer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: SCREEN_WIDTH * 0.7,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 1000,
  },
  drawerItem: {
    fontSize: 20,
    padding: 15,
    fontFamily: "outfit-medium",
    marginLeft: 20,
    color: "black",
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 5,
    borderWidth: 2,
    paddingHorizontal: 20,
  },
  activeButton: {
    backgroundColor: Colors.PRIMARY,
    borderColor: Colors.PRIMARY,
  },
  activeText: {
    color: Colors.WHITE,
    fontWeight: "bold",
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
