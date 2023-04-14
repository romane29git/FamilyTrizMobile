import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FamilyScreen from "../screens/FamilyScreen";
import { screenOptions } from "../theme/styles";
import DetailsScreen from "../screens/DetailsScreen";

// Screen stack for family tab
const FamilyStack = createNativeStackNavigator();

const FamilyStackNavigator = () => {
  return (
    <FamilyStack.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <FamilyStack.Screen
        name="listeFamille"
        component={FamilyScreen}
        options={{ title: "Familles" }}
      />
      <FamilyStack.Screen name="bleue" component={DetailsScreen}/>
      <FamilyStack.Screen name="green" component={DetailsScreen} />
      <FamilyStack.Screen name="yellow" component={DetailsScreen} />
      <FamilyStack.Screen name="red" component={DetailsScreen} />
      <FamilyStack.Screen name="orange" component={DetailsScreen} />
    </FamilyStack.Navigator>
  );
};

export default FamilyStackNavigator;
