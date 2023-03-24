import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../theme/styles";
import { BarChart } from 'react-native-chart-kit';

const HomeScreen = ({ navigation }) => {

  const data = {
    labels: ['Rouge', 'Vert', 'Jaune', 'Bleu', 'Orange'],
    datasets: [
      {
        data: [266, 444, 389, 384, 313]
      }
    ]
  };

  const screenWidth = 200;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default HomeScreen;
