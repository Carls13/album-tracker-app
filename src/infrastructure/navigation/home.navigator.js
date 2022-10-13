import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { HomeView } from "../../views/home/home.view";

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="HomeMain" component={HomeView} />
    </Stack.Navigator>
  );
}