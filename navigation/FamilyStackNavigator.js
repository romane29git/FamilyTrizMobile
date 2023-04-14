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
      <FamilyStack.Screen name="listeFamille" component={FamilyScreen} options={{title:'Familles'}} />
      <FamilyStack.Screen name="bleue" component={BlueScreen} />
      <FamilyStack.Screen name="green" component={GreenScreen} />
      <FamilyStack.Screen name="yellow" component={YellowScreen} />
      <FamilyStack.Screen name="red" component={RedScreen} />
      <FamilyStack.Screen name="orange" component={OrangeScreen} />
    </FamilyStack.Navigator>
  );
};

export default FamilyStackNavigator;
