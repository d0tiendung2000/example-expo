import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    "outfit-regular": require("../assets/fonts/BeVietnamPro-Light.ttf"),
    "outfit-bold": require("../assets/fonts/BeVietnamPro-Bold.ttf"),
    "outfit-medium": require("../assets/fonts/BeVietnamPro-Medium.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
