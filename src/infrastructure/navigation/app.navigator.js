import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "./home.navigator";
import { AlbumNavigator } from "./album.navigator";
import { Ionicons } from "@expo/vector-icons";
import { PRIMARY_COLOR_VARIANT, SECONDARY_COLOR, WHITE } from "../theme/colors";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="HomeMain"  screenOptions={{
        tabBarActiveTintColor: SECONDARY_COLOR,
        tabBarInactiveTintColor: WHITE,
        tabBarLabelStyle: {fontFamily: "2022Qatar-Bold", "fontWeight": "bold"},
        tabBarInactiveBackgroundColor: PRIMARY_COLOR_VARIANT,
        tabBarActiveBackgroundColor: PRIMARY_COLOR_VARIANT,
      headerShown: false
    }}>
      <Tab.Screen name="Home" options={{
        
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="md-home" color={color} size={size} />
        )
      }}
      component={HomeNavigator} />
      <Tab.Screen name="Album" options={{
        tabBarLabel: "Album",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="md-copy" color={color} size={size} />
        )
      }} component={AlbumNavigator} />
      
    </Tab.Navigator>
  );
}


export default Navigation;