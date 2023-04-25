import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    ActivityIndicator,
  } from "react-native";
import styles from "../theme/styles";
import familyService from "../api/familyService";

const StudentScreen = ({ navigation }) => {
  const [families, setFamilies] = useState([]);
  const [family, setFamily] = useState(null);

 
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
        ],
      },
    ],
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <View style={stylesStudent.container}>
      <Text style={stylesStudent.title}>La famille</Text>
      <View style={stylesStudent.row}>
        <FlatList
          data={family.eleves}
          renderItem={({ item }) => {
            return <PersonItem person={item}></PersonItem>;
          }}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
        <FlatList
          data={family.eleves}
          renderItem={({ item }) => {
            return <PersonPromo person={item}></PersonPromo>;
          }}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      </View>
    </View>
  );
};

const stylesStudent = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-around", //vertical
    alignItems: "center", //horizontal
  },
  box: {
    width: "70%",
    // backgroundColor: "#93E2FA",
  },
  points: {
    fontSize: 30,
    fontFamily: "monospace",
    textAlign: "center",
    position: "absolute",
    top: -80,
    backgroundColor: "#11B6FE",
    marginHorizontal: 45,
    textAlign: "center",
    color: "white",
    fontWeight: "300",
    borderRadius: 20,
  },
  row: {
    fontSize: 16,
    padding: 10,
    marginLeft: "10%",
    flexDirection: "row",
  },
  logo: {
    width: 400,
    height: 250,
    // position: "absolute",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default StudentScreen;
