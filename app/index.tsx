import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import { useRouter } from "expo-router";
import SelectExample from "../components/select-example";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <SelectExample />
    </View>
  );
}
