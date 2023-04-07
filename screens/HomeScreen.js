import React from "react";
import { Text, View, Button, Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import styles from "../theme/styles";

const HomeScreen = ({ navigation }) => {
  const data = {
    labels: ["Rouge", "Orange", "Jaune", "Vert", "Bleu"],
    datasets: [
      {
        data: [343, 412, 630, 625, 591],
        colors: [
          (opacity = 1) => `#EE2C03`,
          (opacity = 1) => `#FA8807`,
          (opacity = 1) => `#FAD507`,
          (opacity = 1) => `#09C618`,
          (opacity = 1) => `#1E5AD3`,
        ]
      }
    ]
  };
  return (
    <View style={styles.container}>
      <Text style={homeStyles.title}>Bienvenue</Text>
      <View style={homeStyles.graph}>
        <Text style={homeStyles.graphTitle}>Points coupe des Familles</Text>
        <BarChart
          data={data}
          width={Dimensions.get("window").width - 16}
          height={300}
          withCustomBarColorFromData={true}
          flatColor={true}
          fromZero={true}
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#ffffff",
            backgroundGradientToOpacity: 0.5,
            color: (opacity =0) => `rgba(0,0,0, ${opacity})`,
          }}
          verticalLabelRotation={30}
        />
      </View>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  graphTitle: {
    fontSize: 20,
  },
  graph: {
    marginTop: 50
  }
});

export default HomeScreen;
