import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { PRIMARY_COLOR_VARIANT, SECONDARY_COLOR, WHITE } from "../theme/colors";
import { AlbumNavigator } from "./album.navigator";
import { HomeNavigator } from "./home.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { StickersNavigator } from "./stickers.navigator";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeMain"
      screenOptions={{
        tabBarActiveTintColor: SECONDARY_COLOR,
        tabBarInactiveTintColor: WHITE,
        tabBarLabelStyle: { fontFamily: "2022Qatar-Bold", fontWeight: "bold" },
        tabBarInactiveBackgroundColor: PRIMARY_COLOR_VARIANT,
        tabBarActiveBackgroundColor: PRIMARY_COLOR_VARIANT,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <Ionicons name="md-home" color={color} size={size} />,
        }}
        component={HomeNavigator}
      />
      <Tab.Screen
        name="Album"
        options={{
          tabBarLabel: "Album",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-albums-sharp" color={color} size={size} />
          ),
        }}
        component={AlbumNavigator}
      />
      <Tab.Screen
        name="Stickers"
        options={{
          tabBarLabel: "Stickers",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-copy-sharp" color={color} size={size} />
          ),
        }}
        component={StickersNavigator}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />,
        }}
        component={SettingsNavigator}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
