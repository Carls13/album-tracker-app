import { NavigationContainer } from "@react-navigation/native";
import Font, { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserContextProvider } from "./src/contexts/UserContext";
import { Navigator } from "./src/infrastructure/navigation";
import { AccountNavigator } from "./src/infrastructure/navigation/account.navigator";
import AppNavigator from "./src/infrastructure/navigation/app.navigator";

export default function App() {
  const [loadedFonts] = useFonts({
    "Qatar2022-Bold": require("./assets/fonts/Qatar2022Arabic-Bold.ttf"),
    "Qatar2022-Heavy": require("./assets/fonts/Qatar2022Arabic-Heavy.ttf"),
  });

  return (
    <>
      <UserContextProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </UserContextProvider>
      {/* <ExpoStatusBar style="auto" /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Qatar2022-Bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
});
