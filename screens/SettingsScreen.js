import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Icon
        style={styles.family}
        name="circle"
        size={50}
        color="green"
        onPress={() => console.log("Vert")}
      />
      <Icon
        style={styles.family}
        name="circle"
        size={50}
        color="blue"
        onPress={() => console.log("Bleu")}
      />
      <Icon
        style={styles.family}
        name="circle"
        size={50}
        color="red"
        onPress={() => console.log("Rouge")}
      />
      <Icon
        style={styles.family}
        name="circle"
        size={50}
        color="orange"
        onPress={() => console.log("Orange")}
      />
      <Icon
        style={styles.family}
        name="circle"
        size={50}
        color="yellow"
        onPress={() => console.log("Jaune")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around", //vertical
    alignItems: "center", //horizontal
  }, //mettre des photos/bandes
  family: {},
});

export default SettingsScreen;
