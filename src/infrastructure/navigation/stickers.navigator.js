/* eslint-disable import/namespace */
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { StickersView } from "../../views/stickers/stickers.view";

const Stack = createStackNavigator();

export const StickersNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={StickersView} />
    </Stack.Navigator>
  );
};
