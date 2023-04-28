import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import familyService from "../api/familyService";
import { useState } from "react";
import { useEffect } from "react";

const DetailsScreen = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [family, setFamily] = useState(null);

  async function fetchData(familyId) {
    const fetchedFamilies = await familyService.fetchFamilies();
    setFamily(fetchedFamilies.find((f) => f.id == familyId));
    setLoading(false);
  }

  useEffect(() => {
    const { familyId } = route.params;
    fetchData(familyId);
  }, []);

  const PersonItem = ({ person }) => (
    <Text>{person.prenom + " " + person.nom}</Text>
  );

  const PersonPromo = ({ person }) => (
    <Text>{"Promo " + person.promotion}</Text>
  );

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={
            family.couleur == "Rouge"
              ? require("../assets/rouge.jpg")
              : family.couleur == "Bleu"
              ? require("../assets/bleu.jpg")
              : family.couleur == "Vert"
              ? require("../assets/vert.jpg")
              : family.couleur == "Jaune"
              ? require("../assets/jaune.jpg")
              : family.couleur == "Orange"
              ? require("../assets/orange.jpg")
              : require("../assets/bleu.jpg")
          }
        />
        <View style={styles.box}>
          <Text
            style={[
              styles.points,
              family.couleur == "Rouge"
                ? styles.rouge
                : family.couleur == "Bleu"
                ? styles.bleu
                : family.couleur == "Jaune"
                ? styles.jaune
                : family.couleur == "Vert"
                ? styles.vert
                : family.couleur == "Orange"
                ? styles.orange
                : styles.points,
            ]}
          >
            {family.points} POINTS
          </Text>
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
    marginHorizontal: 45,
    textAlign: "center",
    color: "white",
    fontWeight: "300",
    borderRadius: 20,
    padding: 5,
    // paddingHorizontal: 5, à voir ça marche pas
  },
  rouge: {
    backgroundColor: "#EE2C03",
  },
  bleu: {
    backgroundColor: "#1E5AD3",
  },
  jaune: {
    backgroundColor: "#FAD507",
  },
  vert: {
    backgroundColor: "#09C618",
  },
  orange: {
    backgroundColor: "#FA8807",
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
export default DetailsScreen;
