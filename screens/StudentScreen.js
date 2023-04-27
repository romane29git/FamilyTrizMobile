import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import studentService from "../api/studentService";
import StudentList from "../components/StudentList";

const StudentScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  async function fetchData() {
    const fetchedStudents = await studentService.fetchStudents();
    setStudents(fetchedStudents);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Ajout d'un élève")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <StudentList students={students} />
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
  button: {
    backgroundColor: "#AC6DF4",
    marginTop: 10,
    borderRadius: 10,
    paddingEnd: 20,
    paddingStart: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 40,
    color: "white",
  },
});
export default StudentScreen;
