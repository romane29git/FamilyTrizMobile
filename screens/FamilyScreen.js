import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const FamilyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.box, styles.blue]}
        onPress={() => navigation.navigate("Bleu", {familyId:9})}    
      >
        Bleu
      </Text>
      <Text
        style={[styles.box, styles.green]}
        onPress={() => navigation.navigate("Vert", {familyId:8})}
      >
        Vert
      </Text>
      <Text
        style={[styles.box, styles.yellow]}
        onPress={() => navigation.navigate("Jaune", {familyId:6})}
      >
        Jaune
      </Text>
      <Text
        style={[styles.box, styles.orange]}
        onPress={() => navigation.navigate("Orange", {familyId:10})}
      >
        Orange
      </Text>
      <Text
        style={[styles.box, styles.red]}
        onPress={() => navigation.navigate("Rouge", {familyId:7})}
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
