import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FamilyScreen from "../screens/FamilyScreen";
import { screenOptions } from "../theme/styles";
import BlueScreen from "../screens/BlueScreen";
import GreenScreen from "../screens/GreenScreen";
import YellowScreen from "../screens/YellowScreen";
import RedScreen from "../screens/RedScreen";
import OrangeScreen from "../screens/OrangeScreen";

// Screen stack for family tab
const FamilyStack = createNativeStackNavigator();

const FamilyStackNavigator = () => {
  return (
    <FamilyStack.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <FamilyStack.Screen name="Familles" component={FamilyScreen} />
      <FamilyStack.Screen name="Famille bleue" component={BlueScreen} />
      <FamilyStack.Screen name="Green" component={GreenScreen} />
      <FamilyStack.Screen name="Yellow" component={YellowScreen} />
      <FamilyStack.Screen name="Red" component={RedScreen} />
      <FamilyStack.Screen name="Orange" component={OrangeScreen} />
    </FamilyStack.Navigator>
  );
};

export default FamilyStackNavigator;
