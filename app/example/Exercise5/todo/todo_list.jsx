import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../../constants/Colors";
import { db } from "../../../../configs/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TodoList() {
  const navigation = useNavigation();
  const router = useRouter();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Todo List",
      headerStyle: {
        backgroundColor: Colors.GRAY,
      },
    });
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "todos"));
      const todoList = [];
      querySnapshot.forEach((doc) => {
        todoList.push({ id: doc.id, ...doc.data() });
      });
      setTodos(todoList);
    } catch (error) {
      console.error("Error fetching todos: ", error);
      ToastAndroid.show("Error fetching todos", ToastAndroid.SHORT);
    }
  };

  const handleAddTodo = async () => {
    if (!todo.trim()) {
      ToastAndroid.show("Please enter a todo", ToastAndroid.SHORT);
      return;
    }

    try {
      await addDoc(collection(db, "todos"), {
        text: todo,
        completed: false,
        createdAt: new Date(),
      });
      setTodo("");
      fetchTodos();
      ToastAndroid.show("Todo added successfully", ToastAndroid.SHORT);
    } catch (error) {
      console.error("Error adding todo: ", error);
      ToastAndroid.show("Error adding todo", ToastAndroid.SHORT);
    }
  };

  const toggleTodoCompletion = async (todoId, currentStatus) => {
    try {
      const todoRef = doc(db, "todos", todoId);
      await updateDoc(todoRef, {
        completed: !currentStatus,
      });
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo: ", error);
      ToastAndroid.show("Error updating todo", ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <ScrollView>
          {todos.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.todoItem}
              onPress={() => toggleTodoCompletion(item.id, item.completed)}
            >
              <MaterialIcons
                name={item.completed ? "check-circle" : "cancel"}
                size={24}
                color={item.completed ? Colors.PRIMARY : "red"}
                style={styles.icon}
              />
              <Text
                style={[
                  styles.todoText,
                  item.completed && styles.completedTodoText,
                ]}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View>
        <TextInput
          placeholder="New Todo"
          style={styles.input}
          value={todo}
          onChangeText={setTodo}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.textButton}>ADD TODO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 20,
  },
  view: {
    flex: 1,
  },
  input: {
    borderWidth: 2,
    borderColor: Colors.GRAY,
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  textButton: {
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: "outfit-bold",
    textAlign: "center",
  },
  todoItem: {
    backgroundColor: Colors.GRAY,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  todoText: {
    fontSize: 16,
    fontFamily: "outfit-medium",
    flex: 1,
  },
  completedTodoText: {
    color: Colors.PRIMARY,
  },
  icon: {
    marginRight: 10,
    marginTop: 3,
  },
});
