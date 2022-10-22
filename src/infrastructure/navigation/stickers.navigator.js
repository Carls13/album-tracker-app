/* eslint-disable import/namespace */
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";

const Stack = createStackNavigator();

export const StickersNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Main"
        component={() => (
          <View>
            <Text>Stickers</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
};
