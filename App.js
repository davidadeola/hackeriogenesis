// React Native Functions
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Components
import WelcomeScreen from "./screens/welcomescreen";
import PostScreen from "./screens/postscreen";

// Variables
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Posts" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
