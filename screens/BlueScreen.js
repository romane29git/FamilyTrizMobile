import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
// import styles from "../theme/styles";

const people = [
  { id: 1, firstName: "Romane", lastName: "Cote-colisson", promo: "2024" },
  { id: 2, firstName: "Tessa", lastName: "Blondin", promo: "2025" },
];

const PersonItem = ({ person }) => (
  <Text style={styles.row}>
    {person.firstName + " " + person.lastName + " - Promo " + person.promo}
  </Text>
);

const BlueScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.points}> 387 POINTS</Text>
      </View>
      <FlatList
        data={people}
        renderItem={({ item }) => {
          return <PersonItem person={item}></PersonItem>;
        }}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
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
    height: "15%",
    backgroundColor: "#93E2FA",
  },
  points: {
    fontSize: 30,
    fontFamily: "monospace",
    textAlignVertical: "center", //marche pas
    textAlign: "center",
  },
});
