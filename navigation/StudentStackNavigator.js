import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentScreen from "../screens/StudentScreen";
import StudentCreationScreen from "../screens/StudentCreationScreen";
import { screenOptions } from "../theme/styles";

// Screen stack for student tab
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
        options={{ title: "Élèves" }}
      />
      <StudentStack.Screen name="Ajout d'un élève" component={StudentCreationScreen}/>
    </StudentStack.Navigator>
  );
};

export default StudentStackNavigator;
