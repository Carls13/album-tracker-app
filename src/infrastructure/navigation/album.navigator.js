/* eslint-disable import/namespace */
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { AlbumView } from "../../views/album/album.view";
import { SectionView } from "../../views/album/section.view";

const Stack = createStackNavigator();

export const AlbumNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={AlbumView} />
      <Stack.Screen name="Section" component={SectionView} />
    </Stack.Navigator>
  );
};
