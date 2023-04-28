import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FamilyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.box, styles.blue]}
        onPress={() => navigation.navigate("Bleu", {familyId:4})}    
      >
        Bleu
      </Text>
      <Text
        style={[styles.box, styles.green]}
        onPress={() => navigation.navigate("Vert", {familyId:3})}
      >
        Vert
      </Text>
      <Text
        style={[styles.box, styles.yellow]}
        onPress={() => navigation.navigate("Jaune", {familyId:1})}
      >
        Jaune
      </Text>
      <Text
        style={[styles.box, styles.orange]}
        onPress={() => navigation.navigate("Orange", {familyId:5})}
      >
        Orange
      </Text>
      <Text
        style={[styles.box, styles.red]}
        onPress={() => navigation.navigate("Rouge", {familyId:2})}
      >
        Rouge
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around", //vertical
    alignItems: "center", //horizontal
  },
  box: {
    fontSize: 30,
    fontFamily: "monospace",
    textAlignVertical: "center",
    width: "100%",
    textAlign: "center",
    height: "20%",
  },
  green: {
    backgroundColor: "#79F98E",
  },
  blue: {
    backgroundColor: "#93E2FA",
  },
  red: {
    backgroundColor: "#FC3C3C",
  },
  yellow: {
    backgroundColor: "#F9E74D",
  },
  orange: {
    backgroundColor: "#F89628",
  },
});

export default FamilyScreen;
