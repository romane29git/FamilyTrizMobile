import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import studentService from "../api/studentService";

const StudentItem = ({ stud, navigation }) => {

  const PersonItem = ({ person }) => (
    <Text style={styles.noms}>{person.nom + " " + person.prenom}</Text>
  );

  const PersonPromo = ({ person }) => (
    <Text style={styles.promotion}>{"Promo " + person.promotion}</Text>
  );

  const PersonParrain = ({ person }) => (
      <Text style={styles.promotion}>{"Parrain : " + person.parrain.nom + " " + person.parrain.prenom}</Text>
  );

  const deleteStudent = async () => {
    try{
      navigation.replace('listeEleve');
      await studentService.handleDeleteStudent(stud.id);
    }
    catch (e) {
      console.log(e);
    }
  }

  if(stud.parrain == null){
    return (
      <View style={styles.box}>
        <View style={styles.row}>
          <View style={styles.start}>
            <PersonItem person={stud}></PersonItem>
          </View>
          <View style={styles.end}>
            <TouchableOpacity onPress={() => {
              navigation.navigate("Modification d'un élève", {
                student: stud,
              });
            }}>
              <Ionicons name="create" size={25}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteStudent}>
              <Ionicons name="trash" size={25}></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.start}>
            <PersonPromo person={stud}></PersonPromo>
          </View>
          <View style={styles.end}>
            <Ionicons 
              name="ellipse"
              size={25}
              color={stud.familleId == 7
              ? 'red'
              : stud.familleId == 9
              ? 'blue'
              : stud.familleId == 8
              ? 'green'
              : stud.familleId == 6
              ? 'yellow'
              : stud.familleId == 10
              ? 'orange'
              : 'white'}
            >
            </Ionicons>
          </View>
        </View>
      </View>
    )
  }
  else{
    return (
      <View style={styles.box}>
        <View style={styles.row}>
          <View style={styles.start}>
            <PersonItem person={stud}></PersonItem>
          </View>
          <View style={styles.end}>
            <TouchableOpacity onPress={() => {
              navigation.navigate("Modification d'un élève", {
                student: stud,
              });
            }}>
              <Ionicons name="create" size={25}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteStudent}>
              <Ionicons name="trash" size={25}></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
            <PersonPromo person={stud}></PersonPromo>
        </View>
        <View style={styles.row}>
          <View style={styles.start}>
            <PersonParrain person={stud}></PersonParrain>
          </View>
          <View style={styles.end}>
            <Ionicons 
              name="ellipse"
              size={25}
              color={stud.familleId == 7
              ? 'red'
              : stud.familleId == 9
              ? 'blue'
              : stud.familleId == 8
              ? 'green'
              : stud.familleId == 6
              ? 'yellow'
              : stud.familleId == 10
              ? 'orange'
              : 'white'}
            >
            </Ionicons>
          </View>
        </View>
      </View>
    );
  }
};

export default StudentItem;

const styles = StyleSheet.create({
  box: {
    borderTopWidth: 2,
    width: 300,
    paddingVertical: 10
  },
  row: {
    flexDirection: "row",
  },
  start: {
    flex: 1
  },
  end: {
    flexDirection: "row"
  },
  noms: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  promotion: {
    fontSize: 18
  }
});
