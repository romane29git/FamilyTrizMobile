import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import studentService from "../api/studentService";

const StudentUpdateScreen = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  async function fetchData() {
    const fetchedStudents = await studentService.fetchStudents();
    setStudents(fetchedStudents);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleStudentSelect = (studentId) => {
    const selected = students.find((student) => student.id === studentId);
    setSelectedStudent(selected);
    setNom(selected.nom);
    setPrenom(selected.prenom);
  };

  fetch("https://familytriz.azurewebsites.net/api/studentApi", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: lastName,
      secondParam: "yourOtherValue",
    }),
  });

  const PersonForm = ({ person }) => {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder={person.nom}
          value={nom}
          onChangeText={(value) => setNom(value)}
        ></TextInput>

        <TextInput
          style={styles.input}
          placeholder={person.prenom}
          value={prenom}
          onChangeText={(value) => setPrenom(value)}
        ></TextInput>
      </View>
    );
  };

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
          {students.map((student) => (
            <Text
              key={student.id}
              onPress={() => handleStudentSelect(student.id)}
            >
              {student.nom} {student.prenom}
            </Text>
          ))}
        </View>
        {selectedStudent && (
          <View style={styles.row}>
            <PersonForm person={selectedStudent}></PersonForm>
          </View>
        )}
      </View>
    );
  }
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
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default StudentUpdateScreen;
