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
    console.log(students);
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
        <View style={styles.right}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Ajout d'un élève")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
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
    width: 400
    // justifyContent: "space-around", //vertical
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
    width: 60,
  },
  buttonText: {
    fontSize: 40,
    color: "white",
  },
  right: {
    alignSelf: 'flex-end',
  }
});
export default StudentScreen;
