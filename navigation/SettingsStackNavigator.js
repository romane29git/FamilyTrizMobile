import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";
import { screenOptions } from "../theme/styles";

// Screen stack for settings tab
const SettingsStack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackNavigator;
