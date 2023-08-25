import { NavigationContainer } from "@react-navigation/native";

import { BottomTabNavigations } from "./src/Navigations/BottomTabNavigations";
import { RootStackNavigations } from "./src/Navigations/RootStackNavigations";

export default function App() {
  return <NavigationContainer>{<RootStackNavigations />}</NavigationContainer>;
}
