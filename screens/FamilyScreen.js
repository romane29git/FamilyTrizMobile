import React from "react";
import { Text, View, StyleSheet, navigation } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const FamilyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.box, styles.blue]}
        onPress={() => navigation.navigate("Blue")}
      >
        Bleu
      </Text>
      <Text
        style={[styles.box, styles.green]}
        onPress={() => navigation.navigate("Green")}
      >
        Vert
      </Text>
      <Text
        style={[styles.box, styles.yellow]}
        onPress={() => navigation.navigate("Yellow")}
      >
        Jaune
      </Text>
      <Text
        style={[styles.box, styles.orange]}
        onPress={() => navigation.navigate("Orange")}
      >
        Orange
      </Text>
      <Text
        style={[styles.box, styles.red]}
        onPress={() => navigation.navigate("Red")}
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
