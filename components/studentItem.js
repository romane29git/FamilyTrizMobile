import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const StudentItem = ({ stud }) => {

  const PersonItem = ({ person }) => (
    <Text style={styles.noms}>{person.prenom + " " + person.nom}</Text>
  );

  const PersonPromo = ({ person }) => (
    <Text>{"Promo " + person.promotion}</Text>
  );

  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <View>
          <PersonItem person={stud}></PersonItem>
        </View>
        <View style={styles.end}>
          <Ionicons name="create" size={20}></Ionicons>
          <Ionicons name="trash" size={20}></Ionicons>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <PersonPromo person={stud}></PersonPromo>
        </View>
        <View style={styles.col}></View>
      </View>
    </View>
  );
};

export default StudentItem;

const styles = StyleSheet.create({
  box: {
    borderTopWidth: 2,
    width: 300
  },
  row: {
    flexDirection: "row",
  },
  end: {
    alignSelf: "flex-end"
  },
  noms: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
