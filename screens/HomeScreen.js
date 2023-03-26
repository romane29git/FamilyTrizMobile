import React from "react";
import { Text, View, Button, Dimensions } from "react-native";
import styles from "../theme/styles";
import { BarChart } from "react-native-gifted-charts";

const HomeScreen = ({ navigation }) => {
  const barData = [
    { value: 250, label: "M" },
    { value: 500, label: "T", frontColor: "#177AD5" },
    { value: 745, label: "W", frontColor: "#177AD5" },
    { value: 320, label: "T" },
    { value: 600, label: "F", frontColor: "#177AD5" },
    { value: 256, label: "S" },
    { value: 300, label: "S" },
  ];
  return (
    <View style={styles.container}>
      <BarChart
        barWidth={22}
        noOfSections={3}
        barBorderRadius={4}
        frontColor="lightgray"
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
      />
      <Text style={styles.text}>This is the home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default HomeScreen;
