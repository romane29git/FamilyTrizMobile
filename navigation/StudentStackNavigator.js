import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentScreen from "../screens/StudentScreen";
import { screenOptions } from "../theme/styles";

// Screen stack for family tab
const StudentStack = createNativeStackNavigator();

const StudentStackNavigator = () => {
  return (
    <StudentStack.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <StudentStack.Screen
        name="listeEleve"
        component={StudentScreen}
        options={{ title: "Eleves" }}
      />
    </StudentStack.Navigator>
  );
};

export default StudentStackNavigator;
