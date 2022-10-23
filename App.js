import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { SectionsContextProvider } from "./src/contexts/SectionsContext";
import { UserContextProvider } from "./src/contexts/UserContext";
import { Navigator } from "./src/infrastructure/navigation";

export default function App() {
  useFonts({
    "Qatar2022-Bold": require("./assets/fonts/Qatar2022Arabic-Bold.ttf"),
    "Qatar2022-Heavy": require("./assets/fonts/Qatar2022Arabic-Heavy.ttf"),
  });

  return (
    <>
      <SectionsContextProvider>
        <UserContextProvider>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </UserContextProvider>
      </SectionsContextProvider>
    </>
  );
}
