import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentScreen from "../screens/StudentScreen";
import { screenOptions } from "../theme/styles";
import DetailsScreen from "../screens/DetailsScreen";

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
      <StudentStack.Screen name="bleue" component={DetailsScreen}/>
      <StudentStack.Screen name="green" component={DetailsScreen} />
      <StudentStack.Screen name="yellow" component={DetailsScreen} />
      <StudentStack.Screen name="red" component={DetailsScreen} />
      <StudentStack.Screen name="orange" component={DetailsScreen} />
    </StudentStack.Navigator>
  );
};

export default StudentStackNavigator;
