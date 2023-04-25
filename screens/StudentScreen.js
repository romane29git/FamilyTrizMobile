import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import FamilyDescription from "../components/familyDescription";
import { useState } from "react";
import { useEffect } from "react";
import studentService from "../api/studentService";

const StudentScreen = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState(null);

  async function fetchData() {
    const fetchedStudents = await studentService.fetchStudents();
    setStudent(fetchedStudents);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const PersonItem = ({ person }) => (
    <Text>{person.prenom + " " + person.nom}</Text>
  );

  const PersonPromo = ({ person }) => (
    <Text>{"Promo " + person.promotion}</Text>
  );

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <FlatList
            data={student}
            renderItem={({ item }) => {
              return <PersonItem person={item}></PersonItem>;
            }}
            keyExtractor={(item) => item.id.toString()}
          ></FlatList>
          <FlatList
            data={student}
            renderItem={({ item }) => {
              return <PersonPromo person={item}></PersonPromo>;
            }}
            keyExtractor={(item) => item.id.toString()}
          ></FlatList>
        </View>
      </View>
    );
  }
};

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
    marginHorizontal: 45,
    textAlign: "center",
    color: "white",
    fontWeight: "300",
    borderRadius: 20,
    padding: 5,
    // paddingHorizontal: 5, à voir ça marche pas
  },
  rouge: {
    backgroundColor: "#EE2C03",
  },
  bleu: {
    backgroundColor: "#1E5AD3",
  },
  jaune: {
    backgroundColor: "#FAD507",
  },
  vert: {
    backgroundColor: "#09C618",
  },
  orange: {
    backgroundColor: "#FA8807",
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
export default StudentScreen;
