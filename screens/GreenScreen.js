import React from "react";
import { Text, View } from "react-native";
import styles from "../theme/styles";

const GreenScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the green screen</Text>
    </View>
  );
};

export default GreenScreen;
