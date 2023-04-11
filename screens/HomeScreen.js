import React, { useState, useEffect} from "react";
import { Text, View, Button, Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import styles from "../theme/styles";
import familyService from "../api/familyService";
 
const HomeScreen = ({ navigation }) => {

  const [families, setFamilies] = useState([]);

  async function fetchData() {
    const fetchedFamilies = await familyService.fetchFamilies();
    setFamilies(fetchedFamilies);
  }

  let data = {
    labels: ["Jaune", "Rouge", "Vert", "Bleu", "Orange"],
    datasets: [
      {
        data: [0, 0, 0, 0, 0],
        colors: [
          (opacity = 1) => `#FAD507`,
          (opacity = 1) => `#EE2C03`,
          (opacity = 1) => `#09C618`,
          (opacity = 1) => `#1E5AD3`,
          (opacity = 1) => `#FA8807`,
        ]
      }
    ]
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(families.length == 5){
    data = {
      labels: [families[0].couleur, families[1].couleur, families[2].couleur, families[3].couleur, families[4].couleur],
      datasets: [
        {
          data: [families[0].points, families[1].points, families[2].points, families[3].points, families[4].points],
          colors: [
            (opacity = 1) => `#FAD507`,
            (opacity = 1) => `#EE2C03`,
            (opacity = 1) => `#09C618`,
            (opacity = 1) => `#1E5AD3`,
            (opacity = 1) => `#FA8807`,
          ]
        }
      ]
    };
  }

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
          fromNumber={500}
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
