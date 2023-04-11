import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
// import styles from "../theme/styles";

const people = [
  { id: 1, firstName: "Romane", lastName: "Cote-colisson", promo: "2024" },
  { id: 2, firstName: "Tessa", lastName: "Blondin", promo: "2025" },
];

const PersonItem = ({ person }) => (
  <Text>{person.firstName + " " + person.lastName}</Text>
);

const PersonPromo = ({ person }) => <Text>{"Promo " + person.promo}</Text>;

const BlueScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/bleu.jpg")} />
      <View style={styles.box}>
        <Text style={styles.points}>387 POINTS</Text>
      </View>
      <View style={styles.row}>
        <FlatList
          data={people}
          renderItem={({ item }) => {
            return <PersonItem person={item}></PersonItem>;
          }}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
        <FlatList
          data={people}
          renderItem={({ item }) => {
            return <PersonPromo person={item}></PersonPromo>;
          }}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      </View>
    </View>
  );
};

export default BlueScreen;

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
});
