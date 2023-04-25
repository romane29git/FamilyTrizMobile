import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import FamilyDescription from "../components/familyDescription";
import familyService from "../api/familyService";
import { useState } from "react";
import { useEffect } from "react";

const DetailsScreen = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [family, setFamily] = useState(null);

  async function fetchData(familyId) {
    const fetchedFamilies = await familyService.fetchFamilies();
    setFamily(fetchedFamilies.find(f => f.id == familyId));
    setLoading(false);
  }

  useEffect(() => {
    const { familyId } = route.params;
    fetchData(familyId);
    console.log(family)
  }, []);

  const PersonItem = ({ person }) => (
    <Text>{person.prenom + " " + person.nom}</Text>
  );

  const PersonPromo = ({ person }) => <Text>{"Promo " + person.promotion}</Text>;


if (loading) {
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
} else {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/bleu.jpg")} />
      <View style={styles.box}>
        <Text style={styles.points}>{family.points} POINTS</Text>
      </View>
      <Text style={styles.title}>La famille {family.couleur}</Text>
      <View style={styles.row}>
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
}
};

const styles = StyleSheet.create({
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
    // paddingHorizontal: 5, à voir ça marche pas
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

if (family.couleur == "Jaune")
  styles.points.backgroundColor = 'yellow' 
else if(family.couleur == "Rouge")
  styles.points.backgroundColor = 'red'
else if(family.couleur == "Vert")
  styles.points.backgroundColor = 'green'
export default DetailsScreen;
