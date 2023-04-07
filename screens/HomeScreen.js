import React from "react";
import { Text, View, Button, Dimensions } from "react-native";
import styles from "../theme/styles";
import { BarChart } from "react-native-chart-kit";

const HomeScreen = ({ navigation }) => {
  const data = {
    labels: ["Rouge", "Orange", "Jaune", "Vert", "Bleu"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99]
      }
    ]
  };
  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={Dimensions.get("window").width - 16}
        height={300}
        chartConfig={{
          color: (opacity =255) => `rgba(255,255,255, ${opacity})`,
        }}
        verticalLabelRotation={30}
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
