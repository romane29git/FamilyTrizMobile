import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const studentItem = ( stud ) => {

      const PersonItem = ({ person }) => (
        <Text>{person.prenom + " " + person.nom}</Text>
      );
      
      const PersonPromo = ({ person }) => <Text>{"Promo " + person.promotion}</Text>;
      
    return (
    <View style={styles.box}>
        <View style={styles.row}>
            <View style={styles.col}>
                <PersonItem person={stud}></PersonItem>
            </View>
            <View style={styles.col}>
                <Ionicons name="create" size={10}></Ionicons>
                <Ionicons name="trash" size={10}></Ionicons>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.col}>
                <PersonPromo person={stud}></PersonPromo>
            </View>
            <View style={styles.col}>
                
            </View>
        </View>
    </View>
    );
      };

export default studentItem;

const styles = StyleSheet.create({
    box: {
        borderBottomWidth: 2,
        borderTopWidth: 2
    },
    row: {
        flexDirection: "row"
    },
    col: {

        flexDirection: "col"
    }
  });