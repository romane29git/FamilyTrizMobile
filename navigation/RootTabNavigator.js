import React from "react";
import { StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import FamilyStackNavigator from "./FamilyStackNavigator";

const Tab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#AC6DF4" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Icons will be different if the tab is focused
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Points") {
              iconName = focused ? "ios-podium" : "ios-podium-outline";
            } else if (route.name === "Familles") {
              iconName = focused ? "ios-people" : "ios-people-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#AC6DF4",
          tabBarInactiveTintColor: "gray",
          // Hiding tab navigator header to show only stack header
          headerShown: false,
        })}
      >
        <Tab.Screen name="Points" component={HomeStackNavigator} />
        <Tab.Screen name="Familles" component={FamilyStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootTabNavigator;
