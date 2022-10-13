import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { LoginView } from "../../views/account/login.view";
import { MainView } from "../../views/account/main.view";
import { RegisterView } from "../../views/account/register.view";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Main" component={MainView} />
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Register" component={RegisterView} />
    </Stack.Navigator>
  );
}