/* eslint-disable import/namespace */
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { SettingsView } from "../../views/settings/settings.view";

const Stack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={SettingsView} />
    </Stack.Navigator>
  );
};
